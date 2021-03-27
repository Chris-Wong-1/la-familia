import React from "react"

const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

export default function Header() {
  return (
    <div>
      <h1 style={headingStyles}>
        Taqueria La Familia
      </h1>
    </div>
  )
}