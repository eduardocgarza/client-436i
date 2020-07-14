import styled from "styled-components"
import { UBC_DARK, UBC_GRAY } from "../../models/constants/Colors"

export const ContentHeader = styled.h2`
  background: ${UBC_DARK};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 24px;
  padding: 10px;
  margin-bottom: 4px;
`

export const ContentText = styled.p`
  background: ${UBC_GRAY};
  color: ${UBC_DARK};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  line-height: 1.6;
  padding: 10px 20px;
`

export const ContentImage = styled.img`
  display: block;
  height: 1000px;
  overflow: hidden;
  object-fit: cover;
  margin: 0 auto;
  padding: 10px 0;
  width: 100%;
`
