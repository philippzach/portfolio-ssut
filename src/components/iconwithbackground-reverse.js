import React from "react"

import Img from "gatsby-image"
import styled from "@emotion/styled"

import BackgroundSvg from "../images/background-icon.svg"

const ImageContainer = styled.div`
  position: relative;
  display: flex;
    justify-content: flex-end;
`

const Image = styled.div`
  max-height: 500px;
  margin: auto 0;
  ::after {
    content: "";
    position: absolute;
    top: 50px;
    left: 0px;
    height: 100%;
    width: 85%;
    z-index: -2;
    background: url(${BackgroundSvg}) bottom left;
    background-size: cover;
  }
  @media(max-width: 1000px) {
      ::after {
        left: -20px;
      }
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
