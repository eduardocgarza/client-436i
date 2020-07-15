import styled from "styled-components"
import { UBC_DARK } from "../../../models/constants/Colors"

export const HomeJumbotron = styled.img`
  border: 4px solid ${UBC_DARK};
  border-radius: 3px;
  display: block;
  height: 800px;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
`

export const HomeContent = styled.section`
  padding: 20px;
`
