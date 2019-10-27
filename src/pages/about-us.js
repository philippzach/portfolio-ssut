import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

import ImagewithBg from "../components/imagewithbackground-about"
import IconwithBg from "../components/iconwithbackground"
import ImagewithBgReverse from "../components/imagewithbackground-reverse"
import IconwithBgReverse from "../components/iconwithbackground-reverse"
import Container from "../components/container"
import Headline from "../components/headline"
import Cta from "../components/cta"
import Layout from "../components/layout"
import Slice from "../images/background-slice.svg"

import IconTest from "../images/icon-abouttest.svg"
import Icon1 from "../images/icon-reallyabout1.svg"
import Icon2 from "../images/icon-reallyabout2.svg"
import Icon3 from "../images/icon-reallyabout3.svg"

import Cards from "../components/card-aboutus"
import Hiring from "../components/about-hiring"

import SEO from "../components/seo"
const SectionFlex = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  grid-template-rows: ${props => (props.opposite ? "1fr .55fr" : ".6fr 1fr")};
  @media (max-width: 350px) {
    grid-template-rows: auto;
  }
  @media (min-width: 351px) {
    grid-template-rows: auto;
  }
  @media (min-width: 375px) {
    grid-template-rows: auto;
  }
  @media (min-width: 400px) {
    grid-template-rows: auto;
  }
  @media (min-width: 425px) {
    grid-template-rows: auto;
  }
  @media (min-width: 450px) {
    grid-template-rows: auto;
  }
  @media (min-width: 500px) {
    grid-template-rows: auto;
  }
  @media (min-width: 550px) {
    grid-template-rows: auto;
  }
  @media (min-width: 580px) {
    grid-template-rows: auto;
  }
  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`
const SectionFlexPicture = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  grid-template-rows: ${props => (props.opposite ? "1fr .55fr" : ".6fr 1fr")};
  @media (max-width: 350px) {
    grid-template-rows: auto;
  }
  @media (min-width: 351px) {
    grid-template-rows: auto;
  }
  @media (min-width: 375px) {
    grid-template-rows: auto;
  }
  @media (min-width: 400px) {
    grid-template-rows: auto;
  }
  @media (min-width: 425px) {
    grid-template-rows: auto;
  }
  @media (min-width: 450px) {
    grid-template-rows: auto;
  }
  @media (min-width: 500px) {
    grid-template-rows: auto;
  }
  @media (min-width: 550px) {
    grid-template-rows: auto;
  }
  @media (min-width: 580px) {
    grid-template-rows: auto;
  }
  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`
const SectionFlexOpposite = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  @media (max-width: 350px) {
    grid-template-rows: auto;
  }
  @media (min-width: 351px) {
    grid-template-rows: auto;
  }
  @media (min-width: 400px) {
    grid-template-rows: auto;
  }
  @media (min-width: 425px) {
    grid-template-rows: auto;
  }
  @media (min-width: 450px) {
    grid-template-rows: auto;
  }
  @media (min-width: 500px) {
    grid-template-rows: auto;
  }
  @media (min-width: 550px) {
    grid-template-rows: auto;
  }
  @media (min-width: 580px) {
    grid-template-rows: auto;
  }

  @media (max-width: 650px) {
    .text {
      grid-row: 1;
    }
    .picture {
      grid-row: 2;
    }
  }
  @media (min-width: 651px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`
const TextContainer = styled.div`
  max-width: 80%;
  margin: ${props => (props.left ? "" : "auto")};
  padding-right: 2.5em;
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
    max-width: 100%;
    padding: 0;
  }
  @media (min-width: 650px) and (max-width: 1025px) {
    max-width: 100%;
    padding-right: 1em;
  }
`

const TextContainerOpposite = styled.div`
  max-width: 80%;
  padding-right: 2.5em;
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
    max-width: 100%;
    padding: 0;
  }
  @media (min-width: 650px) and (max-width: 1025px) {
    max-width: 100%;
    padding-right: 0;
    padding-left: 1em;
  }
`

const ImageContainer = styled.div`
  padding-right: 20%;
  @media (max-width: 650px) {
    padding: 0;
    grid-row: 2;
  }
  @media (min-width: 650px) and (max-width: 1025px) {
    padding-right: 0;
  }
`
const ImageContainerHiring = styled.div`
  padding-right: 20%;
  @media (max-width: 650px) {
    padding: 0;
    grid-row: 2;
  }
  @media (min-width: 650px) and (max-width: 1025px) {
    padding-right: 20%;
  }
`

const ImageContainerReverse = styled.div`
  padding-right: 20%;
  @media (max-width: 650px) {
    padding: 0;
  }
  @media (min-width: 650px) and (max-width: 1025px) {
    padding-right: 0;
  }
`

const Spacer = styled.div`
  padding: 2em 0;
  @media (max-width: 650px) {
    padding: 2em 0;
  }
`
const SpacerBig = styled.div`
  padding: 6em 0;
  @media (max-width: 650px) {
    padding: 3em 0;
  }
`
const Spacer1 = styled.div`
  padding: 8em 0;
  @media (max-width: 650px) {
    padding: 4em 0;
  }
`
const Spacer2 = styled.div`
  padding: 2em 0;
  @media (max-width: 650px) {
    padding: 2em 0;
  }
`

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Services = ({ data }) => (
  <Layout data={data.landing}>
    <SEO
      title="SWISS STARTUP TECH | About us"
      description="Our team is made of product builders who strive to serve companies that see the world differently and want to make an impact with  innovative digital solutions."
    />
    <Container>
      <Headline text="About us" />
      <Spacer2 />
      <SectionFlex>
        <ImageContainer>
          <IconwithBg data={IconTest} />
        </ImageContainer>
        <TextContainerOpposite>
          <h3>Mission</h3>
          <p>
            We believe that our mission and clear objectives are the seeds for
            our success. Without any compromise, we take full responsibility for
            every promise we make or commitment we take. We stand behind each
            product developed by our company and our partners.
          </p>
          <p>
            Our common goal is to provide a full lifecycle product development
            by establishing long-term relationships with our partners and
            supporting them through their innovation journey.
          </p>
        </TextContainerOpposite>
      </SectionFlex>
      <SpacerBig />
      <SectionFlexOpposite>
        <TextContainer left className="text">
          <h3>Team</h3>
          <p>
            Our team is entirely made up of product builders who strive to serve
            companies that see the world differently and want to make an impact
            by introducing new innovative digital solutions. We are excited
            about the opportunity to support our customers in defining,
            validating and building their disruptive ideas.
          </p>
          <p>
            Our projects are well defined and always include a concise mission
            statement followed by clear objectives that our team wants to
            achieve. We admire our employees’ creativity and accountability, and
            we empower them to take responsibility for different areas of our
            business.
          </p>
        </TextContainer>
        <ImageContainerReverse className="picture">
          <IconwithBgReverse data={Icon2} />
        </ImageContainerReverse>
      </SectionFlexOpposite>{" "}
      <SpacerBig />
      <SectionFlex>
        <ImageContainer>
          <IconwithBg data={Icon3} />
        </ImageContainer>
        <TextContainerOpposite>
          <h3>Our Values</h3>
          <p>
            In addition to our customer centricity we are guided by a very clear
            culture and value-driven leadership. We believe that common values
            lead to stronger synergy between our employees and partners.
          </p>
        </TextContainerOpposite>
      </SectionFlex>
      <SpacerBig />
      <CardsContainer>
        <Cards />
      </CardsContainer>
      <Spacer2 />
      <Headline text="Hiring Process" />
      <Spacer />
      <SectionFlexPicture>
        <ImageContainerHiring>
          <ImagewithBg data={data.pic1} />
        </ImageContainerHiring>
        <TextContainer>
          <p>
            Our mission and clear objectives are the seeds for our success. Our
            projects are well defined and always include a clear mission
            statement followed by clear objectives that our team aims to
            achieve. We admire our employees’ creativity and accountability and
            we empower them to take responsibility for different areas of our
            business. Without any compromise, we take full responsibility for
            every promise we give or commitment we take.
          </p>
        </TextContainer>
      </SectionFlexPicture>
      <Spacer1 />
      <Hiring />
    </Container>
  </Layout>
)

export default Services

export const data = graphql`
  query {
    landing: file(relativePath: { eq: "about-header.jpg" }) {
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
    pic1: file(relativePath: { eq: "about-1.jpg" }) {
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
