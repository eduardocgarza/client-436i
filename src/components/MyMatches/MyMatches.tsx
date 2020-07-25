/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { GetMatchesRequest } from "../../network/NetworkRequests"
import useAppContext from "../../state/context/ApplicationContext"
import useSessionContext from "../../state/context/SessionContext"
import PageHeader from "../_Shared/PageHeader/PageHeader"
import StudentItem from "../_Shared/StudentItem/StudentItem"
import {
  MyMatchesContainer
} from "./MyMatchesStyles"

export default function MyMatches() {
  const { api } = useSessionContext()
  const { matchesState } = useAppContext()
  const { matches } = matchesState

  async function fetchMatches() {
    const route = GetMatchesRequest()
    try {
      const response = await api.request(route)
      console.log("Matches fetched: ", response)
      if (route.data) {
        // matches.setMatches(route.data)
      }
    }
    catch (error) {

    }
  }
  useEffect(() => {
    fetchMatches()
  }, [])
  return (
    <MyMatchesContainer>
      <PageHeader text="My Matches" />
      {matches.map(match => <StudentItem key={match.accountId} student={match} />)}
    </MyMatchesContainer>
  )
}