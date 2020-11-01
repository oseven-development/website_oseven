resource "aws_cloudfront_distribution" "landingpage" {
  depends_on = [aws_acm_certificate_validation.client_cert, aws_s3_bucket.hosting_bucket]

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  origin {
    domain_name = aws_s3_bucket.hosting_bucket.website_endpoint
    origin_id   = aws_s3_bucket.hosting_bucket.id

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  aliases = [var.root_domain_name]

  comment = "Terraform configured"

  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.hosting_bucket.id
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }


  viewer_certificate {
    cloudfront_default_certificate = false
    acm_certificate_arn            = aws_acm_certificate.client_cert.arn
    ssl_support_method             = "sni-only"
    minimum_protocol_version       = "TLSv1.1_2016"
  }

  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/404.html"
    error_caching_min_ttl = 5
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/404.html"
    error_caching_min_ttl = 5
  }
}

resource "aws_cloudfront_distribution" "redirection_to_landingpage" {
  depends_on = [aws_acm_certificate_validation.client_cert, aws_s3_bucket.hosting_bucket_redirect]

  enabled         = true
  is_ipv6_enabled = true

  origin {
    domain_name = aws_s3_bucket.hosting_bucket_redirect.website_endpoint
    origin_id   = aws_s3_bucket.hosting_bucket_redirect.id

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  aliases = ["www.${var.root_domain_name}"]

  comment = "Terraform configured"

  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.hosting_bucket_redirect.id
    viewer_protocol_policy = "allow-all"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }


  viewer_certificate {
    cloudfront_default_certificate = false
    acm_certificate_arn            = aws_acm_certificate.client_cert.arn
    ssl_support_method             = "sni-only"
    minimum_protocol_version       = "TLSv1.1_2016"
  }
}