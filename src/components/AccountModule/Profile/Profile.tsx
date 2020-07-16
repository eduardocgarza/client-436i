/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import FacebookLogin from "../FacebookLogin/FacebookLogin"
import { GetAccountRequest } from "../../../network/NetworkRequests"
import useSessionContext from "../../../state/context/SessionContext"
import useAppContext from "../../../state/context/ApplicationContext"
import { Card, Container, Row, Col, Image, ListGroup } from "react-bootstrap"

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
  
  return (
    <div className="profile-main">
      <hr/>
      <Card border="primary" style={{ width: '100%', padding:'2em'}}>
      <Container>
        <Card.Img variant="top" src={account ? account.spotify.image.url: ""} />
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
    </div>
  )
}
