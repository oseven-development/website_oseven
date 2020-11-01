

variable "aws_region" {
  type    = string
  default = "eu-central-1"
}

variable "aws_profile" {
  type    = string
  default = "oseven"
}

variable "prefix" {
  type    = string
  default = "oseven-website"
}

variable "random_id" {
  type    = string
  default = "dpengshkxuyercfx"
}




variable "hosted_zone_id" {
  type    = string
  default = "Z3340Y06FZ5TQI"
}


variable "root_domain_name" {
  type    = string
  default = "oseven.de"
}

variable "subject_alternative_names" {
  type    = list(string)
  default = ["www.oseven.de"]
}






