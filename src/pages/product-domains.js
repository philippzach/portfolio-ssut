import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

import ImagewithBg from "../components/imagewithbackground"
import ImagewithBgReverse from "../components/imagewithbackground-reverse"
import Container from "../components/container"
import Headline from "../components/headline"
import Card from "../components/card-tech"
import Cta from "../components/cta"
import Layout from "../components/layout"
import Slice from "../images/background-slice.svg"

import Icon1 from "../images/icon-about1.svg"
import Icon2 from "../images/icon-about2.svg"
import Icon3 from "../images/icon-about3.svg"
import Icon4 from "../images/icon-about4.svg"
import Icon5 from "../images/icon-about5.svg"

import SEO from "../components/seo"
const SectionFlex = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr ;
  grid-template-rows: 1.2fr 1fr;
  @media(min-width: 650px) {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  }
  @media (max-width: 499px) {
    grid-template-rows: .9fr 1fr;
  }
  @media (min-width: 550px) and (max-width: 649px) {
    grid-template-rows: 1.5fr 1fr;
  }
`
const TextContainer = styled.div`
  max-width: 80%;
  margin: auto;
  padding-right: 2.5em;
  @media(max-width: 650px) {
    padding-right: 0em;
  }
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
  padding: 3.5em 0;
  @media(max-width: 650px) {
    padding: 1.5em 0;
  }
`
const SpacerBig = styled.div`
  padding: 6em 0;
  @media(max-width: 650px) {
    padding: 3em 0;
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

const Services = ({ data }) => (
  <Layout data={data.landing}>
    <SEO title="SWISS STARTUP TECH | Product" description="We offer innovative digital strategies with the following products: web & mobile applications, IoT, different reality, blockchain, AI and machine learning. " />
    <Container>
      <Headline text="Product Domains" />
      <Spacer />
      <SectionFlex>
        <ImageContainer>
          <ImagewithBg data={data.pic1} />
        </ImageContainer>
        <TextContainer>
          <h1>The future is digital? Think twice!</h1>
          <p>
            We have arrived in the digitized age some time ago and if you don’t
            want to lose customers or lag behind the competition due to outdated
            solutions, you should not wait any longer. The time to act is now.
          </p>
          <p>
            Take your existing processes and transform them to offer intuitive,
            trackable and speedy experiences. Be disruptive by offering
            innovative digital strategies, effortless user experiences and a
            seamless integration across all channels.
          </p>
        </TextContainer>
      </SectionFlex>
      <SpacerBig />

      <IconsRight>
        <IconTextContainer>
          <div>
            <h3>Web & Mobile Applications</h3>
            <p>
              Our team has a lot of experience building customer-tailored mobile
              and web applications by using cutting-edge technology. We focus on
              both developing new and optimizing existing applications.
              Entertainment, eCommerce, SaaS, ERP or CRM - we are eager to know
              your setup and support you with our experience on the journey to
              your future digital solutions.
            </p>
          </div>
        </IconTextContainer>
        <IconContainer>
          <img src={Icon1} alt="" />
        </IconContainer>
      </IconsRight>
      <Spacer />
      <IconsLeft>
        <IconContainer>
          <img src={Icon2} a2lt="" />
        </IconContainer>
        <IconTextContainer right>
          <div>
            <h3>IoT</h3>
            <p>
              You are in search of an industry 4.0 or smart connected solution
              that is up to the newest standards and covers a wide range of
              requirements and applications? Look no further! We are here to
              support you in finding the right approach and tailoring your smart
              solutions all the way from general smart applications to
              wearables.
            </p>
          </div>
        </IconTextContainer>
      </IconsLeft>
      <Spacer />
      <IconsRight>
        <IconTextContainer>
          <div>
            <h3>Different Reality</h3>
            <p>
              Whether you are in need of a virtual-reality application or you
              prefer augmented reality, or you require a mix of both, we are
              here to support and advise. We develop playful and/or educational
              experiences that lack neither innovative and integrable design nor
              intuitive functionality.
            </p>
          </div>
        </IconTextContainer>
        <IconContainer>
          <img src={Icon3} alt="" />
        </IconContainer>
      </IconsRight>
      <Spacer />
      <IconsLeft>
        <IconContainer>
          <img src={Icon4} a2lt="" />
        </IconContainer>
        <IconTextContainer right>
          <div>
            <h3>Blockchain</h3>
            <p>
              One system from start to finish or different applications for
              every step of the process – we create dedicated solutions tailored
              to our customers’ needs, all the way from supply chain management
              and ownership tracking to smart contracts.
            </p>
          </div>
        </IconTextContainer>
      </IconsLeft>
      <Spacer />
      <IconsRight>
        <IconTextContainer>
          <div>
            <h3>Artificial Intelligence & Machine Learning</h3>
            <p>
              You may not be aware of it, but artificial intelligence and
              machine learning are an integral part of our daily lives. We have
              all the right solutions for you if you want to implement
              technologies in order to optimize your processes and improve
              customer engagement and satisfaction – be it CRM, HR & recruiting
              or data analysis.
            </p>
          </div>
        </IconTextContainer>
        <IconContainer>
          <img src={Icon5} alt="" />
        </IconContainer>
      </IconsRight>
      <Spacer />
    </Container>
  </Layout>
)

export default Services

export const data = graphql`
  query {
    landing: file(relativePath: { eq: "products-header.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1900
          traceSVG: { background: "#ffff", color: "#d78749" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    pic1: file(relativePath: { eq: "products-1.jpg" }) {
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
