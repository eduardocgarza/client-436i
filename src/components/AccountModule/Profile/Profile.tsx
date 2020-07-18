/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import FacebookLogin from "../FacebookLogin/FacebookLogin"
import { GetAccountRequest } from "../../../network/NetworkRequests"
import useSessionContext from "../../../state/context/SessionContext"
import useAppContext from "../../../state/context/ApplicationContext"
import { Card, Container, Row, Col, Image, ListGroup, CardDeck } from "react-bootstrap"


export default function Profile() {
  const { api } = useSessionContext()
  const { account, setAccount } = useAppContext()

  async function fetchProfileData() {
    const x = await api.request(GetAccountRequest())
    console.log("profile: ", x)
    setAccount({
      ...x.data
    })
  }

  useEffect(() => {
    fetchProfileData()
  }, [])

  function renderCard(item) {
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
      <Card.Subtitle className='text-muted'> Top Artists </Card.Subtitle>
      
      {spotifyArtistWrapper()}
      <Card.Subtitle className='text-muted'> Top Tracks </Card.Subtitle>
      {spotifyTrackWrapper()}
    </Card>
  }

  function spotifyArtistWrapper() {
    return <div>
      <CardDeck style={{width: '100%'}}>
        {renderTopArtists()}
      </CardDeck>
      <hr/>
    </div>
  }

  function spotifyTrackWrapper() {
    return <div>
      <CardDeck style={{width: '100%'}}>
        {renderTopTracks()}
        </CardDeck>
    </div>
  }

  function renderTopArtists() {
    let limit = 5;
    let counter = 0;
    return account.spotify.artists.map(artist => {
      while(counter<limit) {
        counter++
        return renderCard(artist)
      }
    })
  }

  function renderTopTracks() {
    let limit = 5;
    let counter = 0;
    return account.spotify.tracks.map(track => {
      while(counter<limit) {
        counter++
        return renderCard(track)
      }
    })
  }

  return (
    <div className="profile-main">
      <hr/>
      <Card key='profile' border="primary" style={{ width: '100%', padding:'2em'}}>
        <Container>
          <Card.Img variant="top" src={account ? account.spotify.image.url: null} />
          <Card.Body>
            <Card.Title>{account ? account.name: null}</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item> Cras justo odio</ListGroup.Item>
                <ListGroup.Item> Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item> Vestibulum at eros</ListGroup.Item>
              </ListGroup>   
          </Card.Body>
        </Container>        
      </Card>
      <hr/>
      { account ? account.spotifyVerified ? spotifyWrapper(): null: null}
      <hr/>
    </div>
  )
}
