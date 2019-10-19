import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Button = styled.button`
  color: white;
  font-family: raleway;
  font-weight: bold;
  font-size: 1em;
  box-shadow: rgba(34, 34, 34, 0.3) 0 4px 7px;
  background-color: #d78749;
  border-color: #d78749;
  border-width: 0;
  border-radius: 3px;
  cursor: pointer;
  padding: 0.5em 1.5em;
  &:hover {
    border-color: #d78749;
    box-shadow: rgba(39, 48, 54, 0.25) 0 8px 14px;
    transform: translateY(-0.125rem);
  }
  &:focus {
    outline: none;
    outline-offset: -4px;
  }
`
const OneButton = ({ text, href }) => (
  <a href={href}>
    <Button>{text}</Button>
  </a>
)

export default OneButton
