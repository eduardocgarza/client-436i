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

export const ProfileWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
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

  function renderCard(spotifyItem: ITrack | IArtist) {
    return <Card style={{width: "15%"}} key={spotifyItem._id}>
      <Card.Img variant="top" src={spotifyItem.image ? spotifyItem.image.url : undefined}/>
      <Card.Body>
        <Card.Title>{spotifyItem.name}</Card.Title>
      </Card.Body>
    </Card>
  }
  
  function spotifyWrapper() {
    return <Card key="spotify" style={{ width: "100%", padding:"2em"}}>
      <Card.Title>Spotify</Card.Title>
      <hr/>
      {account.spotify.artists.length > 0 ? spotifyArtistWrapper() : null }
      {account.spotify.tracks.length > 0 ? spotifyTrackWrapper() : null}
    </Card>
  }

  function facebookLikesWrapper() {
    let limit = Math.min(5 , account.facebook.likes.length);
    let counter = 0;
    return <ListGroup variant="flush">
      <Card.Subtitle>Top Likes</Card.Subtitle>
      {account.facebook.likes.map((like: FacebookLike) => {
        while(counter < limit ) {
          counter++;
          return renderLike(like)
        }
      })}
    </ListGroup>

  }

  function renderLike(like: FacebookLike) {
    return <ListGroup.Item key={like.likeId}>
      {like.name}
    </ListGroup.Item>

  }

  function spotifyArtistWrapper() {
    return <div>
      <CardDeck style={{width: "100%"}}>
        <Card.Subtitle className="text-muted"> Top Artists </Card.Subtitle>
        {renderTopArtists()}
      </CardDeck>
      <hr/>
    </div>
  }

  function spotifyTrackWrapper() {
    return <div>
      <CardDeck style={{width: "100%"}}>
        <Card.Subtitle className="text-muted"> Top Tracks </Card.Subtitle>
        {renderTopTracks()}
        </CardDeck>
    </div>
  }

  function renderTopArtists() {
    let limit = Math.min(5 , account.spotify.tracks.length);
    let counter = 0;
    if (account.spotify.artists.length < 1) return []
    return account.spotify.artists.map((artist: IArtist) => {
      while(counter<limit) {
        counter++
        return renderCard(artist)
      }
      return null
    })
  }

  function renderTopTracks() {
    let limit = Math.min(5 , account.spotify.tracks.length);
    let counter = 0;
    if (account.spotify.tracks.length < 1) return []
    return account.spotify.tracks.map((track: ITrack) => {
      while(counter<limit) {
        counter++
        return renderCard(track)
      }
      return null
    })
  }

  // look into CSS: object-fit
  return (
    <div className="profile-main">
      <hr/>
      <ProfileWrapper>
      <Card border="primary" style={{ width: "50%", padding: "2em" }}>

      <Container>
        <Card.Img variant="top" src={account.facebookVerified ? account.facebook.profilePicURL ? account.facebook.profilePicURL : undefined : undefined} />
        <Card.Body>
          {/* Facebook Stuff */}
          <Card.Title>{account.facebookVerified ? account.facebook.name : account.name}</Card.Title>
          <Card.Text>{account.facebookVerified ? account.facebook.email ? account.facebook.email : account.email : null}</Card.Text>
          <Card.Text>{account.facebookVerified ? account.facebook.hometown ? "Hometown: " + account.facebook.hometown : null : null}</Card.Text>
          {account.facebookVerified ? account.facebook.likes.length > 0 ? facebookLikesWrapper() : null : null}
        </Card.Body>
      </Container>        
      
      </Card>
      </ProfileWrapper>
      <hr/>
      {/* Spotify Stuff */}
      {account.spotifyVerified ? spotifyWrapper() : null}
      <hr/>
    </div>
  )
}
