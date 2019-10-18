import React from "react"
import styled from "@emotion/styled"

const Headline = styled.h2`
  font-family: raleway;
  color: #535353;
`
const Head = props => (
  <>
    <svg width="40px" height="5px" viewBox="0 0 40 5" version="1.1">
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Landing-page"
          transform="translate(-150.000000, -892.000000)"
          fill="#DB8E53"
        >
          <g id="Tittle_SSUT" transform="translate(141.000000, 892.000000)">
            <rect id="Rectangle" x="9" y="0" width="40" height="5"></rect>
          </g>
        </g>
      </g>
    </svg>
    <Headline>{props.text}</Headline>
  </>
)

export default Head
