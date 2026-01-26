variable "location" {
  default = "Southeast Asia"
}

variable "vm_size" {
  default = "Standard_B1ms" # 2GB RAM
}   

variable "ssh_key_path" {
  default = "../id_rsa_azure.pub"
}