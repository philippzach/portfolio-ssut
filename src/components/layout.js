import React from "react"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const FooterBg = styled.footer`
  background-color: #f5f5f5;
`

const Layout = ({ children, data }) => {
  return (
    <>
      <Helmet>
        <meta property="og:image" content="/ssut-social.jpg" />
        <link rel="icon" href="/ssut-favicon.png"></link>
      </Helmet>
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
