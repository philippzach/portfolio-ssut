import React from "react"
import styled from "@emotion/styled"
import Button from "./button"

const Container = styled.div`
  max-width: 780px;
  margin: 4em auto;
  text-align: center;

`
const Headline = styled.h2`
color: rgb(125,125,125);
font-size: 1.2em;
line-height: 1.5em;
font-family: raleway;
`

const Cta = props => (
  <Container>
    <Headline>{props.headline}</Headline>
    <Button text={props.buttonText} link="/contact-us" />
  </Container>
)

export default Cta
