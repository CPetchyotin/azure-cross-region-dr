resource "azurerm_traffic_manager_profile" "tm" {
  name                   = "my-supper-app-tm"
  resource_group_name    = azurerm_resource_group.rg_main.name
  traffic_routing_method = "Priority"

  dns_config {
    relative_name = "my-supper-app-tm"
    ttl           = 60
  }

  monitor_config {
    protocol                     = "HTTP"
    port                         = 80
    path                         = "/"
    interval_in_seconds          = 30
    timeout_in_seconds           = 9
    tolerated_number_of_failures = 3
  }
}
resource "azurerm_traffic_manager_endpoint" "sg_endpoint" {
  name               = "sg_endpoint"
  profile_name       = traffic_manager_profile.tm.name
  target_resource_id = azurerm_public_ip.pip.id
  priority           = 1
  weight             = 100
}
resource "azurerm_traffic_manager_endpoint" "hk_endpoint" {
  name       = "hk-endpoint"
  profile_id = azurerm_traffic_manager_profile.tm.id
  priority   = 2
  weight     = 100
  target     = "my-hk-app-999.eastasia.cloudapp.azure.com"
}
