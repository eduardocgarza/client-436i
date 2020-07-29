/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { GetAccountRequest } from "../../../network/NetworkRequests"
import useSessionContext from "../../../state/context/SessionContext"
import { Card, Container, ListGroup, CardDeck } from "react-bootstrap"
import { AxiosResponse } from "axios"
import useAppContext from "../../../state/context/ApplicationContext"
import { IAccount, FacebookLike } from "../../../state/types/IAccount"
import IArtist from "../../../state/types/IArtist"
import ITrack from "../../../state/types/ITrack"
import styled from "styled-components"
import { spotifyArtistWrapper, spotifyTrackWrapper } from "./SpotifyComponentHelpers/spotifyComponentHelpers"

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

  async function fetchProfileData() {
    try {
      const x: AxiosResponse = await api.request(GetAccountRequest())
      if (!x) {
        alert("something went wrong with the API call")
      }
      const y = x.data as IAccount
      setAccount({
        ...y
      })
    } catch (e) {
      console.log(e.errorClientMessage)
    }
  }

  useEffect(() => {
    fetchProfileData()
  }, [])
  
  function profilePicWrapper() {
    if (account.facebookVerified && account.facebook.profilePicURL) {
      return <Card border="light" style={{ width: "25%", padding: "2em" }}>
        <Card.Img variant="top" src={account.facebook.profilePicURL} />
      </Card>
    } else if (account.spotifyVerified && account.spotify.image) {
      return <Card border="light" style={{ width: "25%", padding: "2em" }}>
      <Card.Img variant="top" src={account.spotify.image.url} />
    </Card>
    } else {
      return null
    }
  }

  function spotifyWrapper() {
    return <div> <hr/> <Card key="spotify" style={{ width: "100%", padding:"2em"}}>
        <Card.Title>Spotify</Card.Title>
        <hr/>
        {account.spotify.artists.length > 0 ? spotifyArtistWrapper(account) : null }
        {account.spotify.tracks.length > 0 ? spotifyTrackWrapper(account) : null}
      </Card>
    </div>
  }

  function facebookLikesWrapper() {
    if (!account.facebookVerified || account.facebook.likes.length <= 0) {
      return null
    } else {
      let limit = Math.min(5 , account.facebook.likes.length);
      let counter = 0;
      return <ListGroup variant="flush">
        <SubtitleWrapper>Top Likes</SubtitleWrapper>
        {account.facebook.likes.map((like: FacebookLike) => {
          while(counter < limit ) {
            counter++;
            return renderLike(like)
          }
        })}
      </ListGroup>
    }
  }

  function renderLike(like: FacebookLike) {
    return <ListGroup.Item key={like.likeId}>
      {like.name}
    </ListGroup.Item>

  }

  function facebookDetailsWrapper() {
    return <Card border='light' style={{ width: '75%'}}>
      <Container>
        <Card.Body>
          <Card.Title>{account.facebookVerified ? account.facebook.name : account.name}</Card.Title>
          <Card.Text>{account.facebookVerified ? account.facebook.email ? "Email: " + account.facebook.email : null : "Email: " + account.email}</Card.Text>
          <Card.Text>{account.facebookVerified ? account.facebook.hometown ? "Hometown: " + account.facebook.hometown : null : null}</Card.Text>
          {facebookLikesWrapper()}
        </Card.Body>
      </Container>          
    </Card>
  }

  return (
    <div className="profile-main">
      <hr/>
      <ProfileWrapper>
        {profilePicWrapper()}
        {/* Facebook Stuff */}
        {facebookDetailsWrapper()}
      </ProfileWrapper>

      {/* Spotify Stuff */}
      {account.spotifyVerified ? spotifyWrapper() : null}
      <hr/>
    </div>
  )
}