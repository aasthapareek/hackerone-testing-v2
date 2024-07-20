variable "do_token" {
  description = "DigitalOcean API token"
  type        = string
  default     = "dop_v1_760935ca9a690720c4df0328f76484ebd39ff03223dc56b4cb041e8827ae1c3c"
  sensitive   = true
}

variable "region" {
  default = "nyc3"
}
