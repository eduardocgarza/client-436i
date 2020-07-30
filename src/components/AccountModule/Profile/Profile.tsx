/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { GetAccountRequest, GetProfileRequest } from "../../../network/NetworkRequests"
import useSessionContext from "../../../state/context/SessionContext"
import { Card } from "react-bootstrap"
import { AxiosResponse } from "axios"
import useAppContext from "../../../state/context/ApplicationContext"
import { IAccount } from "../../../state/types/IAccount"
import styled from "styled-components"
import { spotifyArtistWrapper, spotifyTrackWrapper } from "./SpotifyComponentHelpers/spotifyComponentHelpers"
import { profilePicWrapper, facebookDetailsWrapper } from "./FacebookComponentHelpers/facebookComponentHelpers"

export const ProfileWrapper = styled.div`
  align-items: left;
  justify-content: left;
  display: flex;
`

export const SubtitleWrapper = styled.div`
  font-weight: bold;
  padding-bottom: 1em;
`

export default function Profile() {
  const { api } = useSessionContext()
  const { accountState } = useAppContext()
  const { account, setAccount } = accountState
  let currentURL = window.location.href
  
  async function fetchProfileData() {
    try {
      currentURL = currentURL.substring(currentURL.lastIndexOf("/") + 1)
      const getAccountResponse: AxiosResponse = currentURL === 'profile' ? await api.request(GetAccountRequest()) : await api.request(GetProfileRequest(currentURL))

      if (!getAccountResponse) {
        alert("something went wrong with the API call")
      }
      const accountInfo = getAccountResponse.data as IAccount
      setAccount({
        ...accountInfo
      })
    } catch (e) {
      console.log(e.errorClientMessage)
    }
  }

  useEffect(() => {
    fetchProfileData()
  }, [])

  function spotifyWrapper() {
    return <div> <hr/> <Card key="spotify" style={{ width: "100%", padding:"2em"}}>
        <Card.Title>Spotify</Card.Title>
        <hr/>
        {account.spotify.artists.length > 0 ? spotifyArtistWrapper(account) : null }
        {account.spotify.tracks.length > 0 ? spotifyTrackWrapper(account) : null}
      </Card>
    </div>
  }

  function profileWrapper() {
    return <ProfileWrapper>
      {profilePicWrapper(account)}
      {/* Facebook Stuff */}
      {facebookDetailsWrapper(account)}
    </ProfileWrapper>
  }

  return (
    <div className="profile-main">
      <hr/>
      {profileWrapper()}
      {/* Spotify Stuff */}
      {account.spotifyVerified ? spotifyWrapper() : null}
      <hr/>
    </div>
  )
}