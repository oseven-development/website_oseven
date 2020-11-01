
provider "aws" {
  region                  = var.aws_region
  version                 = "2.44.0"
  shared_credentials_file = "~/.aws/credentials"
  profile                 = var.aws_profile
}

// Provider for Amazon Certificate Manager
provider "aws" {
  alias                   = "acm"
  version                 = "2.44.0"
  shared_credentials_file = "~/.aws/credentials"
  profile                 = var.aws_profile
  region                  = "us-east-1"
}