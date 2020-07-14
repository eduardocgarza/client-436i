import styled from "styled-components"
import { UBC_DARK } from "../../../../models/constants/Colors"

export const CourseItemContainer = styled.section`
  border: 1px solid #CCC;
  border-radius: 2px;
  margin-bottom: 16px;
`

export const CourseItemHeader = styled.h1`
  background: ${UBC_DARK};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 8px 10px;
`

export const StudentsContainer = styled.section`
  padding: 10px 16px;
`

export const StudentsHeader = styled.h2`
  color: ${UBC_DARK};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const StudentsContent = styled.section``
