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

  function renderTopArtists() {
    let limit = 5;
    let counter = 0;
    return account.spotify.artists.map(artist => {
      while(counter<limit) {
        counter++
        return <div>
          <Card key={artist._id}>
            <Card.Img variant="top" src={artist.image.url}/>
            <Card.Body>
              <Card.Title>{artist.name}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      }
    })
  }

  function renderTopTracks() {
    let limit = 5;
    let counter = 0;
    return account.spotify.tracks.map(track => {
      while(counter<limit) {
        counter++
        return <div>
          <Card key={track._id}>
            <Card.Img variant="top" src={track.image.url}/>
            <Card.Body>
              <Card.Title>{track.name}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      }
    })
  }

  return (
    <div className="profile-main">
      <hr/>
      <Card border="primary" style={{ width: '100%', padding:'2em'}}>
        <Container>
          <Card.Img variant="top" src={account ? account.spotify.image.url: null} />
          <Card.Body>
            <Card.Title>{account ? account.name: null}</Card.Title>
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
      { account ? renderTopArtists(): null}
      { account ? renderTopTracks(): null }
    </div>
  )
}
