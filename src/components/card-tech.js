import React from "react"
import styled from "@emotion/styled"
import Icon1 from "../images/icon-tech1.svg"
import Icon2 from "../images/icon-tech2.svg"
import Icon3 from "../images/icon-tech3.svg"
import Icon4 from "../images/icon-tech4.svg"

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 365px);
  grid-template-rows: repeat(2, 365px);
  grid-gap: 1em;
`

const Card = styled.div`
  display: flex;
  padding: 1em 1em 1em 2em;
  flex-direction: column;
  border-radius: 10px;
  transition: box-shadow 300ms ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.18) 5px 6px 12px 0;
  }
`
const ImageContainer = styled.div`
  img {
    margin-bottom: 0.3em;
  }
`
const Headline = styled.h3`
  font-family: raleway;
  font-weight: bold;
  font-size: 1em;
  margin-top: 0.3em;
  margin-bottom: 0.6em;
`
const Paragraph = styled.p`
  font-family: raleway;
  font-weight: 400;
  font-size: 0.8em;
`
const Span = styled.span`
  font-family: raleway;
  font-weight: bold;
`

const CardTech = () => (
  <Grid>
    <Card>
      <ImageContainer>
        <img src={Icon1} alt="" />
      </ImageContainer>
      <Headline>Mobile</Headline>
      <Paragraph>
        We support you both with native and hybrid mobile apps – because after
        all, it is all about great user experience and clean codebase.{" "}
      </Paragraph>
      <Span>Android</Span>
      <Span>iOS</Span>
      <Span>Hybrid</Span>
    </Card>
    <Card>
      <ImageContainer>
        <img src={Icon2} alt="" />
      </ImageContainer>
      <Headline>Backend</Headline>
      <Paragraph>
        We pay a very high attention on building the core of our solutions with
        stability, operability and scalability in mind by using leading
        programming languages and frameworks.
      </Paragraph>
      <Span>NodeJS</Span>
      <Span>Phyton</Span>
      <Span>Java/Scala</Span>
    </Card>
    <Card>
      <ImageContainer>
        <img src={Icon3} alt="" />
      </ImageContainer>
      <Headline>Operations</Headline>
      <Paragraph>
        We use established global tools for hosting, deploying and managing your
        infrastructure so you can streamline your operations more effectively.
      </Paragraph>
      <Span>AWS</Span>
      <Span>GCP</Span>
      <Span>Docker/Kubernetes</Span>
    </Card>
    <Card>
      <ImageContainer>
        <img src={Icon4} alt="" />
      </ImageContainer>
      <Headline>Database</Headline>
      <Paragraph>
        We make use of clear data structures saved in market leading storage
        solutions to grow your system and enhance your data management for
        improved processing and visibility.
      </Paragraph>
      <Span>MongoDBS</Span>
      <Span>MySQL/PostgreSQL</Span>
      <Span>Elasticsearch</Span>
    </Card>
  </Grid>
)
export default CardTech
