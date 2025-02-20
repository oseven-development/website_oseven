# -----------------------------------------------
# Hosting - homepage
# ----------------------------------------------- 

resource "aws_s3_bucket" "hosting_bucket" {
  bucket = "${var.prefix}-hosting-bucket-homepage-${var.random_id}"
  acl    = "private"
  region = var.aws_region

  website {
    index_document = "index.html"
    error_document = "404.html"
  }
}

resource "aws_s3_bucket" "hosting_bucket_redirect" {
  bucket = "${var.prefix}-hosting-bucket-redirect-${var.random_id}"
  acl    = "private"
  region = var.aws_region
  website {
    redirect_all_requests_to = "https://${var.root_domain_name}"
  }
}

resource "aws_s3_bucket_policy" "public-access-website" {
  bucket = aws_s3_bucket.hosting_bucket.id
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "${aws_s3_bucket.hosting_bucket.arn}/*"
    }
  ]
}
POLICY
}