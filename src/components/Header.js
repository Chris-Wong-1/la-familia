import React from "react";
import { Link } from "gatsby";

import "../fonts/typography.css";
import "@fontsource/oswald/500.css";

const header = {
  display: "flex",
  justifyContent: "center",
  // backgroundColor: "#FFC71F",
  backgroundColor: "#FFA21F",
  padding: "2rem",
}

const headerName = {
  fontFamily: "Black Hawk, serif",
  fontSize: "6rem",
  letterSpacing: "0.2rem",
  textAlign: "center",
  flexGrow: "3",
  textDecoration: "none",
  color: "#0A0A0A",
}

const link = {
  fontFamily: "Oswald, serif",
  fontSize: "2rem",
  textDecoration: "none",
  color: "#0A0A0A",
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