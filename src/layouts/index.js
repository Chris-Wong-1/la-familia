import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './styles.css';

const pageStyles = {
  color: "#0A0A0A",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  margin: "0px",
}

export default function Layout({ children }) {
  return (
    <div style={pageStyles}>
      <title>Taqueria La Familia</title>
      <Header />
      {children}
      <Footer />
    </div>
  )
}