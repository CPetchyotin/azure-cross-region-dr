variable "location" {
  default = "Southeast Asia"
}

variable "vm_size" {
  default = "Standard_B2als_v2" #  2 vCPUs, 8GB RAM
}   

variable "ssh_key_path" {
  default = "../id_rsa_azure.pub"
}
variable "resend_api_key" {
  description = "API Key for Resend Email Service"
  type        = string
  sensitive   = true
}