import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Logo from "../images/ssut.svg"
import Button from "../components/button"

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
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: black;
    font-family: raleway;
    font-size: 0.8em;
  }
`

const Footer = () => (
  <Container>
    <Spacer />
    <Top>
      <h4>Contact us</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. It has been the industry's standard dummy text ever since.
      </p>
      <Button text="Take the step now" link="/contact-us" />
    </Top>
    <Spacer />
    <Middle>
      <Link to="/services">Services</Link>
      <Link to="/product-domains">Product</Link>
      <Link to="/technology-stack">Technology</Link>
      <Link to="/about-us">About</Link>
    </Middle>
    <Bottom>
      <ImgContainer>
        <LogoImg src={Logo} />
      </ImgContainer>
      <Span>
        © {new Date().getFullYear()},{` `} Swiss Startup Tech
      </Span>
    </Bottom>
  </Container>
)

export default Footer
