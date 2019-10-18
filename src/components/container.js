import React from "react"

const Container = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 1250,
      padding: `0 1.5em`,
    }}
  >
    {children}
  </div>
)

export default Container
