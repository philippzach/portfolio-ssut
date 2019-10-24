import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import HubspotForm from "react-hubspot-form"

import Container from "../components/container"
import Headline from "../components/headline"
import Layout from "../components/layout"
import Slice from "../images/background-slice.svg"

import SEO from "../components/seo"
const SectionFlex = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 2em;
`
const Form = styled.div`

`

const Spacer = styled.div`
  padding: 2em 0;
`

const Services = ({ data }) => (
  <Layout data={data.landing}>
    <SEO title="SWISS STARTUP TECH | Contact us" description="" />
    <Container>
      <Headline text="Contact " />
      <Spacer />
      <SectionFlex id="form">
        <HubspotForm
          portalId="6396166"
          formId="34adc3c2-124a-412a-adb4-aa0c94ecbcf8"
          onSubmit={() => console.log("Submit!")}
          onReady={form => console.log("Form ready!")}
          loading={
            <Form>
              <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Form>
          }
        />
      </SectionFlex>
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
  }
`
