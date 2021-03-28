import React from "react";
import { Link } from "gatsby";

import "../fonts/typography.css";
import "@fontsource/oswald/500.css";

const header = {
  display: "flex",
  justifyContent: "center",
}

const headerName = {
  fontFamily: "Black Hawk, serif",
  fontSize: "6rem",
  letterSpacing: "0.2rem",
  textAlign: "center",
  flexGrow: "3",
  textDecoration: "none",
  color: "black",
}

const link = {
  fontFamily: "Oswald, serif",
  fontSize: "2rem",
}

export default function Header() {
  return (
    <header style={header}>
      <Link style={link} to="/menu">Menu</Link>
      <Link style={headerName} to="/">
        <div>TAQUERIA</div>
        <div>LA FAMILIA</div>
      </Link>
      <Link style={link} to="/about">About</Link>
    </header>
  )
}