import React from "react"
import styled from "styled-components"
import { UBC_DARK } from "../../../models/constants/Colors"

const PageText = styled.h1`
  background: ${UBC_DARK};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 20px;
`

interface PageHeaderProps {
  text: string
}

export default function PageHeader(props: PageHeaderProps) {
  return (
    <PageText>{props.text}</PageText>
  )
}