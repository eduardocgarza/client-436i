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
import { CalendarUploadWrapper, CalendarContainer, Title } from "../AccountModule/UploadCalendar/UploadCalendarStyles"


export default function MyMatches() {
  const { api } = useSessionContext()
  const { matchesState } = useAppContext()
  const { matches, setMatches } = matchesState

  async function fetchMatches() {
    const route = GetMatchesRequest()
    try {
      const response = await api.request(route)
      const matchesData = response.data.matches
      setMatches([...matchesData])
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
      {matches.length > 0 ? (
        matches.map(match => (
          <StudentItem key={match.accountId} student={match} />
        ))
      ) : <CalendarUploadWrapper>
            <CalendarContainer> 
              <Title> No Matches Found </Title>
              Could not find any matches, connect your social media to try and find some! 
            </CalendarContainer>    
          </CalendarUploadWrapper>}
    </MyMatchesContainer>
  )
}