/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { Card, Container, ListGroup, CardDeck } from "react-bootstrap"
import { IAccount, FacebookLike } from "../../../../state/types/IAccount"
import IArtist from "../../../../state/types/IArtist"
import ITrack from "../../../../state/types/ITrack"
import { SubtitleWrapper } from "../Profile"

export function renderCard(spotifyItem: ITrack | IArtist) {
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


export function spotifyArtistWrapper(account: IAccount) {
  return <div>
    <SubtitleWrapper>Top Artists </SubtitleWrapper>
    <CardDeck style={{width: "100%"}}>
      <Card.Subtitle className="text-muted">  </Card.Subtitle>
      {renderTopArtists(account)}
    </CardDeck>
    <hr/>
  </div>
}

export function spotifyTrackWrapper(account: IAccount) {
  return <div>
    <SubtitleWrapper>Top Tracks </SubtitleWrapper>
    <CardDeck style={{width: "100%"}}>
      <Card.Subtitle className="text-muted">  </Card.Subtitle>
      {renderTopTracks(account)}
      </CardDeck>
  </div>
}

export function renderTopArtists(account: IAccount) {
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

export function renderTopTracks(account: IAccount) {
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