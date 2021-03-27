import * as React from "react"

// styles
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}

// markup
const IndexPage = () => {
  return (
    <main>
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>Maria's Baja Style Fish Tacos</span>
        <br />
        <span role="img" aria-label="Taco emojis">
         🌮 🌮 🌮
        </span>
      </h1>
      <p style={paragraphStyles}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum gravida velit, in tempus libero interdum in. Fusce imperdiet neque lorem, ac placerat lacus semper sit amet. Vestibulum vel urna quis lectus mattis efficitur. Donec eu ultricies justo. Curabitur placerat magna nec consequat pulvinar. Suspendisse a enim quis orci volutpat mattis. Vivamus et mauris dui. Donec facilisis mollis enim, sit amet mollis purus tincidunt ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi scelerisque et metus quis ornare. Proin auctor nisi diam, convallis fringilla nunc facilisis id. In et dui diam. Morbi at lobortis velit, eu posuere mauris. Duis a dapibus augue. Cras tincidunt, ipsum in egestas sagittis, nisi nunc ullamcorper libero, id ultricies nisi augue eget eros. Phasellus feugiat elementum porttitor. Nulla consequat velit lectus, eu pharetra diam elementum et.
      </p>
    </main>
  )
}

export default IndexPage
