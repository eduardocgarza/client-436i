import React from "react"
import styled from "styled-components"

const Text = styled.p`
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  padding: 4px;
`

interface ValidationErrorProps {
  text: string
}

export default function ValidationError (props: ValidationErrorProps) {
  return (
    <Text>{props.text}</Text>
  )
}