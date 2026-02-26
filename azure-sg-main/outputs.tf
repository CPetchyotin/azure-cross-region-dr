output "primary_public_ip" {
  value = azurerm_public_ip.pip.ip_address
}
output "cosmosdb_connection_string" {
  value     = azurerm_cosmosdb_account.db.primary_sql_connection_string
  sensitive = true
}
