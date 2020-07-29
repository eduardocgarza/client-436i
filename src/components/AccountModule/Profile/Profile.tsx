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

  function renderCard(spotifyItem: ITrack | IArtist) {
    if (!spotifyItem.image || !spotifyItem.image.url) {
      return null;
    }
    return <Card style={{width: "15%"}} key={spotifyItem._id}>
      <Card.Img variant="top" src={spotifyItem.image ? spotifyItem.image.url : undefined}/>
      <Card.Body>
        <Card.Title>{spotifyItem.name}</Card.Title>
      </Card.Body>
    </Card>
  }
  
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
        {account.spotify.artists.length > 0 ? spotifyArtistWrapper() : null }
        {account.spotify.tracks.length > 0 ? spotifyTrackWrapper() : null}
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
        <Card.Subtitle>Top Likes</Card.Subtitle>
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

  function spotifyArtistWrapper() {
    return <div>
      <SubtitleWrapper>Top Artists </SubtitleWrapper>
      <CardDeck style={{width: "100%"}}>
        <Card.Subtitle className="text-muted">  </Card.Subtitle>
        {renderTopArtists()}
      </CardDeck>
      <hr/>
    </div>
  }

  function spotifyTrackWrapper() {
    return <div>
      <SubtitleWrapper>Top Tracks </SubtitleWrapper>
      <CardDeck style={{width: "100%"}}>
        <Card.Subtitle className="text-muted">  </Card.Subtitle>
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
        const artistCard = renderCard(artist)
        if (artistCard) {
          counter++
        }
        return artistCard
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
        const trackCard = renderCard(track)
        if (trackCard) {
          counter++
        }
        return trackCard
      }
      return null
    })
  }

  // look into CSS: object-fit
  return (
    <div className="profile-main">
      <hr/>
      <ProfileWrapper>
      
      {profilePicWrapper()}

      <Card border='light' style={{ width: '75%'}}>
        <Container>
          <Card.Body>
            {/* Facebook Stuff */}
            <Card.Title>{account.facebookVerified ? account.facebook.name : account.name}</Card.Title>
            <Card.Text>{account.facebookVerified ? account.facebook.email ? account.facebook.email : null : account.email}</Card.Text>
            <Card.Text>{account.facebookVerified ? account.facebook.hometown ? "Hometown: " + account.facebook.hometown : null : null}</Card.Text>
            {facebookLikesWrapper()}
          </Card.Body>
        </Container>          
      </Card>

      </ProfileWrapper>
      
      {/* Spotify Stuff */}
      {account.spotifyVerified ? spotifyWrapper() : null}
      <hr/>
    </div>
  )
}
