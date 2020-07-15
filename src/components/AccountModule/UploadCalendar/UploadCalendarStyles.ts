import styled from "styled-components"
import { UBC_DARK } from "../../../models/constants/Colors"

export const CalendarUploadWrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 60vh;
`

export const CalendarContainer = styled.section`
  border: 6px solid ${UBC_DARK};
  border-radius: 3px;
  margin: 20px auto;
  padding: 30px;
  width: 50%;
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
  text-transform: uppercase;
`

export const Redirect = styled.a`
  display: inline
`