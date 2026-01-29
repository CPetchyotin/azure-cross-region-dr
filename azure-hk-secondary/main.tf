terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }

  backend "azurerm" {
    resource_group_name  = "rg-terraform-state"
    storage_account_name = "stterraformcnn001"
    container_name       = "tfstate"
    key                  = "hk.tfstate"
  }
}
resource "azurerm_resource_group" "rg_dr" {
  name     = "rg-dr"
  location = var.location
  tags = {
    environment = "Production", Role = "Secondary"
  }
}

resource "azurerm_virtual_network" "vnet" {
  name                = "vnet-hk"
  address_space       = ["10.1.0.0/16"]
  location            = azurerm_resource_group.rg_dr.location
  resource_group_name = azurerm_resource_group.rg_dr.name
}

resource "azurerm_subnet" "subnet" {
  name                 = "subnet-hk"
  resource_group_name  = azurerm_resource_group.rg_dr.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.1.1.0/24"]
}

resource "azurerm_public_ip" "pip" {
  name                = "pip-hk"
  location            = azurerm_resource_group.rg_dr.location
  resource_group_name = azurerm_resource_group.rg_dr.name
  allocation_method   = "Static"
  sku                 = "Standard"
  domain_name_label   = "my-hk-app-999"
}

resource "azurerm_network_interface" "nic" {
  name                = "nic-hk"
  location            = azurerm_resource_group.rg_dr.location
  resource_group_name = azurerm_resource_group.rg_dr.name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.subnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.pip.id
  }
}
resource "azurerm_linux_virtual_machine" "vm" {
  name                            = "vm-secondary-hk"
  resource_group_name             = azurerm_resource_group.rg_dr.name
  location                        = azurerm_resource_group.rg_dr.location
  size                            = var.vm_size
  admin_username                  = "adminuser"
  disable_password_authentication = true

  admin_ssh_key {
    username   = "adminuser"
    public_key = file(var.ssh_key_path)
  }

  network_interface_ids = [
    azurerm_network_interface.nic.id,
  ]
  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }
  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts"
    version   = "latest"
  }
  tags = {
    environment = "Disaster-Recovery"   #
    Role        = "Secondary-webserver" #
  }
  custom_data = base64encode(templatefile("${path.module}/../install_docker.sh", {
    region_message = "Hello from Hongkong " #
  }))
}
resource "azurerm_network_security_group" "nsg" {
  name                = "nsg-allow-traffic"
  location            = azurerm_resource_group.rg_dr.location
  resource_group_name = azurerm_resource_group.rg_dr.name

  security_rule {
    name                       = "Allow-SSH"
    priority                   = 100
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "22"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }
  # docker
  security_rule {
    name                       = "Allow-HTTP"
    priority                   = 110
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "80"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }
}
resource "azurerm_network_interface_security_group_association" "nic_nsg_assoc" {
  network_interface_id      = azurerm_network_interface.nic.id
  network_security_group_id = azurerm_network_security_group.nsg.id
}
