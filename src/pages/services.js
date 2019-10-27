import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"

import ImagewithBg from "../components/imagewithbackground-service"
import ImagewithBgReverse from "../components/imagewithbackground-reverse-service"
import Container from "../components/container"
import Headline from "../components/headline"
import Card from "../components/card-tech"
import Cta from "../components/cta"
import Layout from "../components/layout"
import Slice from "../images/background-slice.svg"

import SEO from "../components/seo"

const SectionFlex = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  grid-template-rows: ${props => (props.opposite ? "1fr .85fr" : ".85fr 1fr")};
  @media (max-width: 350px) {
    grid-template-rows: 0.45fr 1fr;
  }
  @media (max-width: 375px) {
    grid-template-rows: 0.6fr 1fr;
  }
  @media (min-width: 400px) {
    grid-template-rows: 0.7fr 1fr;
  }
  @media (min-width: 450px) {
    grid-template-rows: 0.8fr 1fr;
  }
  @media (min-width: 500px) {
    grid-template-rows: 0.85fr 1fr;
  }
  @media (min-width: 551px) {
    grid-template-rows: 1.2fr 1fr;
  }
  @media (min-width: 600px) {
    grid-template-rows: 1.2fr 1fr;
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
  grid-template-rows: ${props => (props.opposite ? "1fr .85fr" : ".85fr 1fr")};
  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  @media (max-width: 499px) {
    grid-template-rows: ${props =>
      props.opposite ? "1fr .55fr" : ".65fr 1fr"};
  }
  @media (min-width: 500px) and (max-width: 550px) {
    grid-template-rows: ${props =>
      props.opposite ? "1fr .55fr" : ".85fr 1fr"};
  }
  @media (min-width: 551px) and (max-width: 649px) {
    grid-template-rows: ${props =>
      props.opposite ? "1fr .55fr" : "1.2fr 1fr"};
  }
  @media (min-width: 1200px) {
    margin-bottom: 8em;
  }
  @media (max-width: 599px) {
    margin-bottom: 8em;
  }
`
const TextContainer = styled.div`
  max-width: 80%;
  margin: auto;
  padding-right: 2.5em;
  @media (max-width: 650px) {
    padding-right: 0em;
    max-width: 100%;
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
  @media (min-width: 650px) and (max-width: 1025px) {
    max-width: 100%;
    padding-right: 1em;
  }
`
const TextContainerOpposite = styled.div`
  max-width: 80%;
  padding-right: 2.5em;
  @media (max-width: 650px) {
    padding-right: 0em;
    max-width: 100%;
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
  @media (min-width: 650px) and (max-width: 1025px) {
    max-width: 100%;
    padding-right: 1em;
  }
`

const ImageContainer = styled.div`
  @media (max-width: 599px) {
    padding: 0 10% 0 0;
    grid-row: 2;
  }
  padding-right: 20%;
`
const ImageContainerOpposite = styled.div`
  @media (max-width: 599px) {
    padding: 0 10% 0 0;
  }
  padding-right: 20%;
  @media (min-width: 650px) and (max-width: 1025px) {
    padding-left: 20%;
    padding-right: 0;
  }
`

const Spacer = styled.div`
  padding: 2em 0;
`
const Spacer15 = styled.div`

@media (min-width: 600px) { padding: 2em 0; }
}
  @media (min-width: 900px) { padding: 2em 0; }
}
@media (min-width: 1200px) { padding: 3.45em 0; }

  
`
const SpacerAdd = styled.div`
  padding: 2em 0;
  @media (max-width: 650px) {
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
  @media (max-width: 599px) {
    height: 1425px;
  }
  @media (min-width: 600px) and (max-width: 900px) {
    height: 1210px;
  }
`
const Services = ({ data }) => (
  <Layout data={data.landing}>
    <SEO
      title="SWISS STARTUP TECH | Services"
      description="Swiss Startup Tech as a digital innovation team offers digital product development, product refinement and optimisation in digital transformation processes. "
    />
    <Container>
      <Headline text="Services" />
      <Spacer />
      <a id="productdevelopment">
        <SectionFlex>
          <ImageContainer>
            <ImagewithBg data={data.pic1} />
          </ImageContainer>
          <TextContainer>
            <h1>Product Development</h1>
            <p>
              No matter at what stage, products require continuous development.
              Whether we are talking about new features, fixing bugs or
              optimizing the architecture, we use agile methodologies to
              develop, review and implement user-friendly solutions. to work in
              sprints and do planning, demo and retrospective sessions. We ship
              frequently and never stop listening to you and to your customers’
              feedback.
            </p>
            <p>
              Whatever plans you have for your product, we are here to bring
              them to life. We use modern software development methodologies to
              craft compliant state-of-the-art applications with intuitive user
              interfaces. Thanks to our quality assurance standards we are able
              to achieve the best possible solutions and deliver scalable,
              stable and future-proof solutions for our customers.
            </p>
          </TextContainer>
        </SectionFlex>
      </a>
      <Spacer15 />
    </Container>

    <BackgroundSvg>
      <Container>
        <SectionFlexOpposite opposite id="product-refinement">
          <TextContainerOpposite>
            <h1>Product Refinement</h1>
            <p>
              Sometimes in an early phase of product development, people tend to
              neglect the quality of the product in favor of an earlier
              go-to-market. We support teams that are refactoring their products
              by introducing improved architecture, cleaner codebase and faster
              applications.
            </p>
            <p>
              We are happy to bring your solution to the next level and prepare
              it for global scale. Our team is dedicated to improving your
              infrastructure by reviewing and solving bottlenecks both in
              architecture and data modelling so you can offer the best-possible
              solution to your customers.
            </p>
          </TextContainerOpposite>
          <ImageContainerOpposite>
            <ImagewithBgReverse data={data.pic3} />
          </ImageContainerOpposite>
        </SectionFlexOpposite>
      </Container>
    </BackgroundSvg>

    <Container>
      <Spacer15 />
      <SectionFlex id="digital-transformation">
        <ImageContainer>
          <ImagewithBg data={data.pic2} />
        </ImageContainer>
        <TextContainer>
          <h1>Digital Transformation</h1>
          <p>
            Businesses today increasingly adopt innovative technology for their
            everyday procedures. They optimize processes by using mobile apps,
            machine learning and internet of things. We support you in adopting
            those technologies and mapping them for specific use-cases.
          </p>
          <p>
            Many (physical) products do not yet utilize the full potential of
            the digital age. The same is true for companies that still rely on
            traditional systems and applications in their daily work. We analyze
            the status quo and come up with a roadmap to enter the digital
            space. We iteratively analyze business processes and find the best
            possible solution for particular optimizations. Our goal is to
            reduce any physical interaction to a minimum so that you can spend
            more time on important core tasks and product development instead of
            recurring tedious manual tasks.
          </p>
        </TextContainer>
      </SectionFlex>
      <Spacer15 />
    </Container>
  </Layout>
)

export default Services

export const data = graphql`
  query {
    landing: file(relativePath: { eq: "services-header.jpg" }) {
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
    pic1: file(relativePath: { eq: "services-1.jpg" }) {
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
    pic3: file(relativePath: { eq: "services2.jpg" }) {
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
    pic2: file(relativePath: { eq: "services3.jpg" }) {
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
