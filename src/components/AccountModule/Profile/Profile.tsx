/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { GetAccountRequest } from "../../../network/NetworkRequests"
import useSessionContext from "../../../state/context/SessionContext"
import useAppContext, { Account } from "../../../state/context/ApplicationContext"
import { Card, Container, ListGroup, CardDeck } from "react-bootstrap"
import { AxiosResponse } from "axios"
import { Track , Artist } from "../../../models/spotifyInterfaces"


export default function Profile() {
  const { api } = useSessionContext()
  const { account, setAccount } = useAppContext()

  async function fetchProfileData() {
    try {
      const x: AxiosResponse = await api.request(GetAccountRequest())
      if (!x) {
        alert("something went wrong with the API call")
      }
      const y = x.data as Account
      
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

  function renderCard(item: Track | Artist) {
    return <Card style={{width: '15%'}} key={item._id}>
      <Card.Img variant="top" src={item.image.url}/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
      </Card.Body>
    </Card>
  }
  
  function spotifyWrapper() {
    return <Card key='spotify' style={{ width: '100%', padding:'2em'}}>
      <Card.Title>Spotify</Card.Title>
      <hr/>
      {account.spotify.artists.length > 0 ? spotifyArtistWrapper() : null }
      {account.spotify.tracks.length > 0 ? spotifyTrackWrapper() : null}
    </Card>
  }

  function spotifyArtistWrapper() {
    return <div>
      <CardDeck style={{width: '100%'}}>
        <Card.Subtitle className='text-muted'> Top Artists </Card.Subtitle>
        {renderTopArtists()}
      </CardDeck>
      <hr/>
    </div>
  }

  function spotifyTrackWrapper() {
    return <div>
      <CardDeck style={{width: '100%'}}>
        <Card.Subtitle className='text-muted'> Top Tracks </Card.Subtitle>
        {renderTopTracks()}
        </CardDeck>
    </div>
  }

  function renderTopArtists() {
    let limit = 5;
    let counter = 0;
    return account.spotify.artists.map((artist: Artist) => {
      while(counter<limit) {
        counter++
        return renderCard(artist)
      }
    })
  }

  function renderTopTracks() {
    let limit = 5;
    let counter = 0;
    return account.spotify.tracks.map((track: Track) => {
      while(counter<limit) {
        counter++
        return renderCard(track)
      }
    })
  }

  return (
    <div className="profile-main">
      <hr/>
      <Card border="primary" style={{ width: '100%', padding:'2em'}}>
      <Container>
        <Card.Img variant="top" src={account.spotifyVerified ? account.spotify.image ? account.spotify.image.url : null : null } />
        <Card.Body>
          <Card.Title>{account ? account.name: ""}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Container>        
      
      </Card>
      <hr/>
      {/* Spotify Stuff */}
      {account.spotifyVerified ? spotifyWrapper() : null}
      <hr/>
      {/* Facebook Stuff */}
    </div>
  )
}
