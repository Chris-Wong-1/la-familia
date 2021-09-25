import React from "react"

const footerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "Oswald, serif",
  fontSize: "1.2rem",
  letterSpacing: "0.1rem",
}

const phoneNumber = {
  textDecoration: "none",
  color: "inherit",
}

export default function Footer() {
  return (
    <div style={footerStyles}>
      <div>
        <a style={phoneNumber} href="tel:1-510-548-3420">(510) 548-3420</a>
      </div>
      <div>Open Monday - Friday, 10:30AM - 8PM</div>
      <div>Closed Saturdays and Sundays</div>
      <div>2971 Shattuck Avenue, Berkeley, California</div>
    </div>
  )
}