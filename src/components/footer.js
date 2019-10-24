import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Logo from "../images/ssut.svg"
import Button from "../components/buttonhref"

const Container = styled.footer``

const ImgContainer = styled.div``
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoImg = styled.img`
  margin-bottom: 0;
`
const Span = styled.span`
  font-family: raleway;
  font-weight: 400;
  @media (max-width: 650px) {
    font-size: 12px;
  }
`
const Top = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  h4 {
    font-family: raleway;
    font-weight: bold;
    font-size: 1.6em;
  }
  p {
    font-family: raleway;
  }
`
const Spacer = styled.div`
  padding: 2em 0;
`
const Middle = styled.div`
  max-width: 500px;
  margin: 3.5em auto;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: black;
    font-family: raleway;
    font-size: 0.8em;
  }
  @media (max-width: 650px) {
    margin: 3.5em auto;
  }
`

const Footer = () => (
  <Container>
    <Spacer />
    <Top>
      <h4>Get in touch with us!</h4>
      <p>
      Be innovative and find the right product for your strategy
      </p>
      <Button text="Contact us" link="/contact-us" />
    </Top>
    <Middle>
      <Link to="/services">Services</Link>
      <Link to="/product-domains">Product</Link>
      <Link to="/technology-stack">Technology</Link>
      <Link to="/about-us">About</Link>
      <a href="https://medium.com/swiss-startup-tech">Blog</a>
    </Middle>
    <Bottom>
      <ImgContainer>
        <LogoImg src={Logo} />
      </ImgContainer>
      <Span>
        © {new Date().getFullYear()},{` `} Swiss Startup Tech AG
      </Span>
    </Bottom>
  </Container>
)

export default Footer
