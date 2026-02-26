terraform {
  backend "azurerm" {
    resource_group_name  = "rg-terraform-state"
    storage_account_name = "stterraformcnn001" # 👈 แก้เป็นชื่อตู้เซฟของคุณ!
    container_name       = "tfstate"
    key                  = "sg.tfstate" # ชื่อไฟล์ความจำของสิงคโปร์
  }
}

resource "azurerm_resource_group" "rg_main" {
  name     = "rg-main"
  location = var.location
  tags = {
    environment = "Production", Role = "Primary-webserver"
  }
}

resource "azurerm_virtual_network" "vnet" {
  name                = "vnet-sg"
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.rg_main.location
  resource_group_name = azurerm_resource_group.rg_main.name
}

resource "azurerm_subnet" "subnet" {
  name                 = "subnet-sg"
  resource_group_name  = azurerm_resource_group.rg_main.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.0.1.0/24"]
}


resource "azurerm_public_ip" "pip" {
  name                = "pip-sg"
  location            = azurerm_resource_group.rg_main.location
  resource_group_name = azurerm_resource_group.rg_main.name
  allocation_method   = "Static"
  sku                 = "Standard"
  domain_name_label   = "my-sg-app-999"
}

resource "azurerm_network_interface" "nic" {
  name                = "nic-sg"
  location            = azurerm_resource_group.rg_main.location
  resource_group_name = azurerm_resource_group.rg_main.name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.subnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.pip.id
  }
}

resource "azurerm_linux_virtual_machine" "vm" {
  name                            = "vm-sg"
  resource_group_name             = azurerm_resource_group.rg_main.name
  location                        = azurerm_resource_group.rg_main.location
  size                            = var.vm_size
  admin_username                  = "adminuser"
  disable_password_authentication = true


  network_interface_ids = [
    azurerm_network_interface.nic.id,
  ]

  admin_ssh_key {
    username   = "adminuser"
    public_key = file("${var.ssh_key_path}")
  }

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS" #SSD
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-LTS"
    version   = "latest"
  }

  tags = {
    environment = "Production", Role = "Primary-webserver"
  }
}
resource "azurerm_network_security_group" "nsg" {
  name                = "nsg-allow-traffic"
  location            = azurerm_resource_group.rg_main.location
  resource_group_name = azurerm_resource_group.rg_main.name
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

  # Docker
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
  security_rule {
    name                       = "Allow-Grafana"
    priority                   = 120
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "8080"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }
  security_rule = {
    name                       = "Allow-Prometheus"
    priority                   = 130
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "9090"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }
}
resource "azurerm_network_interface_security_group_association" "nic_nsg_assoc" {
  network_interface_id      = azurerm_network_interface.nic.id
  network_security_group_id = azurerm_network_security_group.nsg.id
}

resource "azurerm_container_registry" "acr" {
  name                = "acragss2026"
  resource_group_name = azurerm_resource_group.rg_main.name
  location            = azurerm_resource_group.rg_main.location
  sku                 = "Basic"
  admin_enabled       = true
}

output "acr_login_server" {
  value = azurerm_container_registry.acr.login_server
}
output "acr_admin_username" {
  value = azurerm_container_registry.acr.admin_username
}
output "acr_admin_password" {
  value     = azurerm_container_registry.acr.admin_password
  sensitive = true
}

resource "azurerm_cosmosdb_account" "db" {
  name                = "cosmosdbagss2026"
  location            = azurerm_resource_group.rg_main.location
  resource_group_name = azurerm_resource_group.rg_main.name
  offer_type          = "Standard"
  kind                = "GlobalDocumentDB"
  free_tier_enabled   = true

  consistency_policy {
    consistency_level = "Session"
  }

  geo_location {
    location          = azurerm_resource_group.rg_main.location
    failover_priority = 0
  }
  geo_location {
    location          = "Japan East"
    failover_priority = 1
  }
}

output "cosmosdb_connection_string" {
  value     = azurerm_cosmosdb_account.db.primary_sql_connection_string
  sensitive = true
}


