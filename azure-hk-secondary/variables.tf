variable "location" {
  default = "eastasia"  # Hong Kong East
}

variable "vm_size" {
  default = "Standard_B1ms" # 1GB RAM
}   

variable "ssh_key_path" {
  default = "../id_rsa_azure.pub"
}