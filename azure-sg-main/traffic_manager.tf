resource "azurerm_traffic_manager_profile" "tm" {
  name                   = "agss-dr-tm-profile"
  resource_group_name    = azurerm_resource_group.rg_main.name
  traffic_routing_method = "Priority"

  dns_config {
    relative_name = "agss-app-service"
    ttl           = 30
  }

  monitor_config {
    protocol                     = "HTTP"
    port                         = 80
    path                         = "/"
    interval_in_seconds          = 15
    timeout_in_seconds           = 7
    tolerated_number_of_failures = 2
  }
}
resource "azurerm_traffic_manager_azure_endpoint" "sg_endpoint" {
  name               = "sg-endpoint"
  profile_id         = azurerm_traffic_manager_profile.tm.id
  target_resource_id = azurerm_public_ip.pip.id
  priority           = 1
  weight             = 100
}
resource "azurerm_traffic_manager_external_endpoint" "hk_endpoint" {
  name       = "hk-endpoint"
  profile_id = azurerm_traffic_manager_profile.tm.id
  priority   = 2
  weight     = 100
  target     = "my-hk-app-999.eastasia.cloudapp.azure.com"
}
