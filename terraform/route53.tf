# -----------------------------------------------
# Records
# ----------------------------------------------- 

resource "aws_route53_record" "a-record" {
  depends_on = [aws_cloudfront_distribution.landingpage]
  zone_id    = var.hosted_zone_id
  name       = var.root_domain_name
  type       = "A"
  alias {
    name                   = aws_cloudfront_distribution.landingpage.domain_name
    zone_id                = aws_cloudfront_distribution.landingpage.hosted_zone_id
    evaluate_target_health = false
  }


}

resource "aws_route53_record" "aaaa-record" {
  depends_on = [aws_cloudfront_distribution.landingpage]
  zone_id    = var.hosted_zone_id
  name       = var.root_domain_name
  type       = "AAAA"
  alias {
    name                   = aws_cloudfront_distribution.landingpage.domain_name
    zone_id                = aws_cloudfront_distribution.landingpage.hosted_zone_id
    evaluate_target_health = false
  }


}

resource "aws_route53_record" "a-record-www-redirect" {
  depends_on = [aws_cloudfront_distribution.redirection_to_landingpage]
  zone_id    = var.hosted_zone_id
  name       = "www.${var.root_domain_name}"
  type       = "A"
  alias {
    name                   = aws_cloudfront_distribution.redirection_to_landingpage.domain_name
    zone_id                = aws_cloudfront_distribution.redirection_to_landingpage.hosted_zone_id
    evaluate_target_health = false
  }


}

resource "aws_route53_record" "aaaa-record-www-redirect" {
  depends_on = [aws_cloudfront_distribution.redirection_to_landingpage]
  zone_id    = var.hosted_zone_id
  name       = "www.${var.root_domain_name}"
  type       = "AAAA"
  alias {
    name                   = aws_cloudfront_distribution.redirection_to_landingpage.domain_name
    zone_id                = aws_cloudfront_distribution.redirection_to_landingpage.hosted_zone_id
    evaluate_target_health = false
  }
}