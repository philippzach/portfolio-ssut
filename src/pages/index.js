import React from "react"
import { graphql } from "gatsby"

import styled from "@emotion/styled"
import Logo from "../images/lp-logo-new.svg"
import ImagewithBg from "../components/imagewithbackground"
import Container from "../components/container"
import Headline from "../components/headline"
import Card from "../components/card-landingpage"
import Logos from "../components/logos"

import Layout from "../components/layout"

import SEO from "../components/seo"

const SectionFlex = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  grid-template-rows: 0.85fr 1fr;
  @media (max-width: 350px) {
    grid-template-rows: 1fr 0.5fr;
  }
  @media (min-width: 351px) {
    grid-template-rows: 1fr 0.6fr;
  }
  @media (min-width: 400px) {
    grid-template-rows: 1fr 0.7fr;
  }
  @media (min-width: 425px) {
    grid-template-rows: 1fr 0.8fr;
  }
  @media (min-width: 450px) {
    grid-template-rows: 1fr 0.9fr;
  }
  @media (min-width: 500px) {
    grid-template-rows: 1fr 1fr;
  }
  @media (min-width: 550px) {
    grid-template-rows: 1fr 1.1fr;
  }
  @media (min-width: 580px) {
    grid-template-rows: 1fr 1.2fr;
  }
  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`
const TextContainer = styled.div`
  max-width: 80%;
  margin: auto;
  h1 {
    font-family: raleway;
    font-weight: bold;
    color: rgb(106, 106, 106);
  }
  p {
    font-family: raleway;
    font-weight: 400;
    color: rgb(65, 65, 65);
  }
  @media (max-width: 650px) {
    max-width: 95%;
  }
`

const ImageContainer = styled.div`
  padding-right: 20%;
  @media (max-width: 650px) {
    grid-row: 2;
  }
`

const Spacer = styled.div`
  padding: 2em 0;
`
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`

const IndexPage = ({ data }) => (
  <Layout data={data.landing}>
    <SEO
      title="SWISS STARTUP TECH | Empowering digital product development"
      description="We are a Swiss digital innovation team focused on accelerating product development and building innovative solutions."
    />
    <Container>
      <Logos />
      <Headline text="Empowering product innovation" />
      <Spacer />
      <SectionFlex>
        <ImageContainer>
          <ImagewithBg data={data.rocket} />
        </ImageContainer>
        <TextContainer>
          <img
            className="index-logo"
            src={Logo}
            alt="Swiss Startup Tech Logo"
          />
          <h1>
            We are a swiss digital innovation team focused on accelerating
            product development and building innovative solutions.
          </h1>
          <p>
            Together with our clients we challenge the status quo and focus on
            simple yet powerful innovative solutions. We help them become the
            disruptors they want to be by creating intuitive tools and
            experiences across different domains.{" "}
          </p>
        </TextContainer>
      </SectionFlex>
      <Spacer />
      <Spacer />
      <Headline text="Our Focus" />
      <Spacer />
      <CardContainer>
        <Card />
      </CardContainer>
      <Spacer />
      <Spacer />
    </Container>
  </Layout>
)

export default IndexPage

export const data = graphql`
  query {
    landing: file(relativePath: { eq: "lp-header.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          quality: 100
          traceSVG: { background: "#ffff", color: "#d78749" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    rocket: file(relativePath: { eq: "lp-rocket.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          quality: 100
          traceSVG: { background: "#ffff", color: "#d78749" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
