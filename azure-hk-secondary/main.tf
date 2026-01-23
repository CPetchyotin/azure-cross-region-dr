resource "azurerm_resource_group" "rg_dr" {
  name     = "rg-dr"
  location = var.location
  tags = {
    environment = "Production", Role = "Secondary"
  }
}

resource "azurerm_virtual_network" "vnet" {
  name = "vnet-hk"
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
  name = "vm-secondary-hk"
    resource_group_name = azurerm_resource_group.rg_dr.name
    location            = azurerm_resource_group.rg_dr.location
    size                = var.vm_size
    admin_username      = "adminuser"
    disable_password_authentication = true

    admin_ssh_key {
      username =  "adminuser"
      public_key = file(var.ssh_key_path)
    }

    network_interface_ids = [
      azurerm_network_interface.nic.id,
    ]
    os_disk {
      caching = "ReadWrite"
        storage_account_type = "Standard_LRS"
    }
    source_image_reference {
      publisher = "Canonical"
      offer = "0001-com-ubuntu-server-jammy"
      sku = "22_04-lts"
      version = "latest"
    }
}