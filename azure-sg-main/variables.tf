variable "location" {
  default = "Southeast Asia"
}

variable "vm_size" {
  default = "Standard_B2als_v2" #  2 vCPU, 4GB RAM
}   

variable "ssh_key_path" {
  default = "../id_rsa_azure.pub"
}