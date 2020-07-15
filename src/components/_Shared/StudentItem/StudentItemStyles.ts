import styled from "styled-components"

export const StudentItemContainer = styled.section`
  border: 1px solid #CCC;
  border-radius: 3px;
  margin-bottom: 10px;
  `

export const StudentItemButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  display: flex;
  padding: 5px;
  width: 100%;

  &:hover {
    background: #F4F4F4;
  }

  &:focus {
    outline: none;
  }
`

export const StudentImage = styled.img`
  border-radius: 3px;
  display: block;
  height: 50px;
  width: 50px;
`

export const StudentName = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin: 0 0 0 10px;
`

export const StudentDetails = styled.section`
  padding: 16px;
`

export const DetailsContainer = styled.section`
`

export const DetailsHeader = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
`

export const DetailsContent = styled.section`
  display: flex;
  flex-wrap: wrap;
`

export const DetailsItem = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`