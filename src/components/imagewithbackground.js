import React from "react"

import Img from "gatsby-image"
import styled from "@emotion/styled"

import BackgroundSvg from "../images/background.svg"

const ImageContainer = styled.div`
  position: relative;
`

const Image = styled.div`
  max-height: 500px;
  margin: auto 0;
  ::after {
    content: "";
    position: absolute;
    top: 25%;
    left: 25%;
    height: 100%;
    width: 100%;
    z-index: -2;
    background: url(${BackgroundSvg}) bottom right;
    background-size: cover;
  }
`

const ImagewithBg = props => (
  <ImageContainer>
    <Image>
      <Img
        style={{ maxHeight: "580px" }}
        fluid={props.data.childImageSharp.fluid}
        alt="Swiss Startup Tech"
      />
    </Image>
  </ImageContainer>
)

export default ImagewithBg
