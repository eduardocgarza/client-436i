import React from "react"
import useAppContext from "../../state/context/ApplicationContext"
import PageHeader from "../_Shared/PageHeader/PageHeader"
import StudentItem from "../_Shared/StudentItem/StudentItem"
import {
  MyMatchesContainer
} from "./MyMatchesStyles"

export default function MyMatches() {
  const { matches } = useAppContext()
  return (
    <MyMatchesContainer>
      <PageHeader text="My Matches" />
      {matches.map(match => <StudentItem key={match.id} student={match} />)}
    </MyMatchesContainer>
  )
}