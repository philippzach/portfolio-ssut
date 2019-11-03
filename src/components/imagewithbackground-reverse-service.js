import React from "react"

import Img from "gatsby-image"
import styled from "@emotion/styled"

import BackgroundSvg from "../images/bg-mesh.svg"

const ImageContainer = styled.div`
  position: relative;
`

const Image = styled.div`
  max-height: 450px;
  margin: auto 0;
  ::after {
    content: "";
    position: absolute;
    bottom: -40%;
    left: -25%;
    height: 102%;
    width: 100%;
    z-index: 0;
    background: url(${BackgroundSvg}) bottom right;
    background-size: cover;
  }
`

const ImagewithBg = props => (
  <ImageContainer>
    <Image>
      <Img
        style={{ maxHeight: "580px" }}
        imgStyle={{ zIndex: "10" }}
        fluid={props.data.childImageSharp.fluid}
        alt="Swiss Startup Tech"
      />
      {/* <img src={BackgroundSvg} /> */}
    </Image>
  </ImageContainer>
)

export default ImagewithBg
