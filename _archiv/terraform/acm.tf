resource "aws_acm_certificate" "client_cert" {
  provider                  = aws.acm
  domain_name               = var.root_domain_name
  subject_alternative_names = var.subject_alternative_names
  validation_method         = "DNS"
}


resource "aws_route53_record" "client_cert_validation" {
  provider   = aws.acm
  depends_on = [aws_acm_certificate.client_cert]
  count      = 2
  name       = lookup(aws_acm_certificate.client_cert.domain_validation_options[count.index], "resource_record_name")
  type       = lookup(aws_acm_certificate.client_cert.domain_validation_options[count.index], "resource_record_type")
  zone_id    = var.hosted_zone_id
  records    = [lookup(aws_acm_certificate.client_cert.domain_validation_options[count.index], "resource_record_value")]
  ttl        = 300
}

resource "aws_acm_certificate_validation" "client_cert" {
  provider        = aws.acm
  depends_on      = [aws_acm_certificate.client_cert]
  certificate_arn = aws_acm_certificate.client_cert.arn
}
