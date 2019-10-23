import React from "react"
import { graphql } from "gatsby"

import styled from "@emotion/styled"
import Logo from "../images/lp-logo-new.svg"
import ImagewithBg from "../components/imagewithbackground"
import Container from "../components/container"
import Headline from "../components/headline"
import Card from "../components/card-landingpage"

import Layout from "../components/layout"

import SEO from "../components/seo"

const SectionFlex = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr ;
  grid-template-rows: .55fr 1fr;
  @media(min-width: 650px) {
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
  @media(max-width: 650px) {

  }
`

const ImageContainer = styled.div`
  padding-right: 20%;
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
    <SEO title="SWISS STARTUP TECH | Digital Innovation Team " description="We are a Swiss digital innovation team focused on accelerating product development for startups and corporates of all sizes." />
    <Container>
      <Headline text="Swiss Startup Tech" />
      <Spacer />
      <SectionFlex>
        <ImageContainer>
          <ImagewithBg data={data.rocket} />
        </ImageContainer>
        <TextContainer>
          <img src={Logo} alt="" />
          <h1>
            We are a Swiss digital innovation team focused on accelerating
            product development for startups and corporates of all sizes.
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
          maxWidth: 1900
          traceSVG: { background: "#ffff", color: "#d78749" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    rocket: file(relativePath: { eq: "lp-rocket.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1900
          traceSVG: { background: "#ffff", color: "#d78749" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
