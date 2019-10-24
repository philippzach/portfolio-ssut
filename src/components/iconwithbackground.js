import React from "react"

import Img from "gatsby-image"
import styled from "@emotion/styled"

import BackgroundSvg from "../images/background-icon.svg"

const ImageContainer = styled.div`
  position: relative;
  display: flex;
    justify-content: flex-start;
`

const Image = styled.div`
  max-height: 500px;
  margin: auto 0;
  ::after {
    content: "";
    position: absolute;
    top: 50px;
    left: 14.75%;
    height: 101%;
    width: 85%;
    z-index: -2;
    background: url(${BackgroundSvg}) bottom right;
    background-size: cover;
  }
`

const ImagewithBg = props => (
  <ImageContainer>
    <Image>
      <img
       
        src={props.data}
      />
    </Image>
  </ImageContainer>
)

export default ImagewithBg
