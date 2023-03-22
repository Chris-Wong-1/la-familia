import * as React from "react"

// styles
const paragraphStyles = {
  paddingTop: "2rem",
  paddingBottom: "4rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "Oswald, serif",
  fontSize: "1.2rem",
  letterSpacing: "0.1rem",
  textAlign: "center"
}

const orderButton = {
  appearance: "button",
  textDecoration: "none",
  width: "16rem",
  fontSize: "2rem",
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  display: "inline-block",
}

const contentStyles = {
  paddingTop: "2rem",
}

// markup
const IndexPage = () => {
  return (
    <main>
      <p style={paragraphStyles}>
        <a
          style={orderButton}
          href="https://www.clover.com/online-ordering/taqueria-la-familia-berkeley-2">
            ORDER ONLINE
        </a>
        <div style={contentStyles}>
          Welcome back to inside dining!
        </div>
        <div>
          Please feel free to join us here, phone ahead and/or place your order online.
        </div>
        <div>Thank you for you continued patronage and loving support!</div>
      </p>
    </main>
  )
}

export default IndexPage
