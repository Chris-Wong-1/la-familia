import React from "react";

import "../fonts/typography.css";
import "@fontsource/oswald/500.css";

const header = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#FF9D00",
  fontFamily: "Black Hawk, serif",
  fontSize: "6rem",
  letterSpacing: "0.2rem",
  color: "#0A0A0A",
  paddingTop: "2.5rem",
  paddingBottom: "1.5rem",
  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
}

const titleBottom ={
  display: "flex"
}

const laText = {
  alignSelf: "flex-start",
  fontSize: "4rem",
  paddingRight: "0.7rem",
}

const mariasText = {
  fontFamily: "Oswald, serif",
  fontSize: "2rem",
  letterSpacing: "0.1rem",
}

export default function Header() {
  return (
    <header style={header}>
      <div>TAQUERIA</div>
      <div style={titleBottom}>
        <div style={laText}>LA</div>
        <div>FAMILIA</div>
      </div>
      <div style={mariasText}>MARIA'S BAJA STYLE FISH TACOS</div>
    </header>
  )
}