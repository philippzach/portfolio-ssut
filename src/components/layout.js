import React from "react"

import Img from "gatsby-image"
import styled from "@emotion/styled"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

/* const Heading = styled.h1`
  position: absolute;
  z-index: 10;
  font-family: futura;
  font-weight: bold;
  color: #25457f;
  line-height: 1.25em;
  max-width: 80%;
  left: 120px;
  top: 150px;
  @media (max-width: 600px) {
    left: 50px;
    top: 100px;
  }
  @media (min-width: 601px) and (max-width: 850px) {
    left: 100px;
  }
  @media (min-width: 1050px) and (max-width: 1249px) {
    top: 220px;
  }
  @media (min-width: 1250px) and (max-width: 1499px) {
    top: 250px;
  }
  @media (min-width: 1500px) {
    max-width: 800px;
    top: 300px;
    left: 50%;
    transform: translateX(-50%);
  }
` */
const FooterBg = styled.footer`
  background-color: #f5f5f5;
`

const Layout = ({ children, data }) => {
  return (
    <>
      <Header />
      {/* <Heading>
        The leading independent experts in Startup Scouting, Assessment and
        Valuation
      </Heading> */}
      <Img
        className="headerpic"
        fluid={data.childImageSharp.fluid}
        alt="bv4 header image"
        style={{ zIndex: "-1" }}
      ></Img>

      <main>{children}</main>

      <FooterBg>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1250,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <Footer />
        </div>
      </FooterBg>
    </>
  )
}

export default Layout
