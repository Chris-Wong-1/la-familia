import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
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