import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

import ImagewithBg from "../components/imagewithbackground"
import Container from "../components/container"
import Headline from "../components/headline"
import Card from "../components/card-tech"
import Cta from "../components/cta"
import Layout from "../components/layout"

import SEO from "../components/seo"
const SectionFlex = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr ;
  grid-template-rows: .42fr 1fr;
  
  @media (max-width: 350px) {
    grid-template-rows: .40fr 1fr;
  }
  @media (min-width: 351px) {
    grid-template-rows: .50fr 1fr;
  }
  @media (min-width: 400px) {
    grid-template-rows: .60fr 1fr;
  }
  @media (min-width: 425px) {
    grid-template-rows: .70fr 1fr;
  }
  @media (min-width: 450px) {
    grid-template-rows: .80fr 1fr;
  }
  @media (min-width: 500px) {
    grid-template-rows: .9fr 1fr;
  }
  @media (min-width: 550px) {
    grid-template-rows: 1fr 1fr;
  } 
  @media (min-width: 580px) {
    grid-template-rows: 1.1fr 1fr;
  }
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
    max-width: 100%;
  
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

const Tech = ({ data }) => (
  <Layout data={data.landing}>
    <SEO title="SWISS STARTUP TECH | Technology" description="We support you with mobile and backend technologies as well as with operations and databases and offer tailored setups. Technology is complex – we support you. " />
    <Container>
      <Headline text="Technology Stack" />
      <Spacer />
      <SectionFlex>
        <ImageContainer>
          <ImagewithBg data={data.rocket} />
        </ImageContainer>
        <TextContainer>
          <h1>
            We live in a highly digitized world. To stay competitive, great
            ideas, products and services are not enough any longer.
          </h1>
          <p>
            In order to remain ahead of the game, processes and workflows need
            to be digital and function across all applications from web to
            mobile. Whether you are looking to improve your operations and
            backend, or you need one solution across all channels, we’ve got you
            covered. We put ourselves in your shoes to learn about your
            challenges. Then we start digging deep and design streamlined
            solutions based on your requirements and on clean codes. After all
            we want to deliver what you need – an intuitive product that is easy
            to integrate in your existing system and that requires little
            maintenance.
          </p>
          <p>
            As a technology-driven team we constantly experiment with and
            improve new programming languages, frameworks and tools while always
            keeping compliance regulations in mind. Yet we tend to be very
            pragmatic when choosing technology stack for our projects and focus
            on scalable future-proof solutions. Here is an overview of our
            common setups:
          </p>
        </TextContainer>
      </SectionFlex>
      <Spacer />
      <CardContainer>
        <Card />
      </CardContainer>
      <Spacer />
      {/* <Cta
        headline="Technology is complex and diverse; every use case is unique. In order to achieve outstanding results, we analyze each solution separately and use our many years of experience when developing tailored setups."
        buttonText="Contact us"
      /> */}
    </Container>
  </Layout>
)

export default Tech

export const data = graphql`
  query {
    landing: file(relativePath: { eq: "tech-header.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1900
          traceSVG: { background: "#ffff", color: "#d78749" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    rocket: file(relativePath: { eq: "tech-code.jpg" }) {
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
