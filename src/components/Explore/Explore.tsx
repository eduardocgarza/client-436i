import React from "react"
import ubc from "../../assets/images/UBC.jpg"
import { PageWrapper } from "../../assets/styles/PageWrapper"
import {
  ContentHeader,
  ContentText,
  ContentImage,
} from "./ExploreStyles"

export default function Explore () {
  return (
    <PageWrapper>
      <ContentHeader>Explore UBC</ContentHeader>
      <ContentText>
        The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia. Established in   1908, UBC is British Columbia's oldest university. The university ranks among the top three universities in Canada.
      </ContentText>
      <ContentImage src={ubc} />
    </PageWrapper>
  )
}