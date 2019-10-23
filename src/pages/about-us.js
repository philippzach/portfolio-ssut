import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

import ImagewithBg from "../components/imagewithbackground"
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
  grid-template-columns: 1fr ;
  grid-template-rows: ${props =>
    props.opposite ? '1fr .55fr' : '.6fr 1fr'};
  @media(min-width: 650px) {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  }
`
const TextContainer = styled.div`
  max-width: 80%;
  margin: auto;
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
`

const ImageContainer = styled.div`
  padding-right: 20%;
`

const Spacer = styled.div`
  padding: 2em 0;
  @media(max-width: 650px) {
    display: none;
  }
`
const SpacerBig = styled.div`
  padding: 6em 0;
  @media(max-width: 650px) {
    display: none;
  }
`
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`
const BackgroundSvg = styled.section`
  display: flex;
  align-items: center;
  background-image: url(${Slice});
  height: 910px;
  background-position: center;
  background-size: cover;
`
const IconsLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: center;
  }
`
const IconsRight = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: center;
  }
`
const IconContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.14) 0 4px 6px 0;
  background-color: #db8e53;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 750px) {
    width: 350px;
    height: 350px;
  }
  img {
    padding: 2em 1em;
    margin-bottom: 0;
  }
`
const IconTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1.45em;
  @media (min-width: 750px) {
    align-items: ${props => (props.right ? "flex-end" : "flex-start")};
    width: 50%;
    padding-top: 0em;
  }
  div {
    max-width: 350px;
  }
  h3 {
    color: #535353;
    font-family: raleway;
    font-weight: bold;
    line-height: 1.2em;
  }
  p {
    color: #535353;
    font-family: raleway;
  }
`
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Services = ({ data }) => (
  <Layout data={data.landing}>
    <SEO title="SWISS STARTUP TECH | About us" description="Our team is made of product builders who strive to serve companies that see the world differently and want to make an impact with  innovative digital solutions." />
    <Container>
      <Headline text="About us" />
      <Spacer />
      <Spacer />
      <SectionFlex>
        <ImageContainer>
          <IconwithBg data={IconTest} />
        </ImageContainer>
        <TextContainer>
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
        </TextContainer>
      </SectionFlex>
      <SpacerBig />
      <SectionFlex opposite>
        <TextContainer left>
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
        <ImageContainer>
          <IconwithBgReverse data={Icon2} />
        </ImageContainer>
      </SectionFlex>{" "}
      <SpacerBig />
      <SectionFlex>
        <ImageContainer>
          <IconwithBg data={Icon3} />
        </ImageContainer>
        <TextContainer>
          <h3>Our Values</h3>
          <p>
            In addition to our customer centricity we are guided by a very clear
            culture and value-driven leadership. We believe that common values
            lead to stronger synergy between our employees and partners.
          </p>
        </TextContainer>
      </SectionFlex>
      <SpacerBig />
      <CardsContainer>
        <Cards />
      </CardsContainer>
      <Spacer />
      <Headline text="Hiring Process" />
      <Spacer />
      <SectionFlex>
        <ImageContainer>
          <ImagewithBg data={data.pic1} />
        </ImageContainer>
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
      </SectionFlex>
      <SpacerBig />
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
          maxWidth: 1900
          traceSVG: { background: "#ffff", color: "#d78749" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    pic1: file(relativePath: { eq: "about-1.jpg" }) {
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
