/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { Card, Container, ListGroup } from "react-bootstrap"
import { IAccount, FacebookLike } from "../../../../state/types/IAccount"
import { SubtitleWrapper } from "../Profile"

  
export function profilePicWrapper(account: IAccount) {
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

export function facebookLikesWrapper(account: IAccount) {
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

export function renderLike(like: FacebookLike) {
  return <ListGroup.Item key={like.likeId}>
    {like.name}
  </ListGroup.Item>
}

export function facebookDetailsWrapper(account: IAccount) {
  return <Card border='light' style={{ width: '75%'}}>
    <Container>
      <Card.Body>
        <Card.Title>{account.facebookVerified ? account.facebook.name : account.name}</Card.Title>
        <Card.Text>{account.facebookVerified ? account.facebook.email ? "Email: " + account.facebook.email : "Email: " + account.email : "Email: " + account.email}</Card.Text>
        <Card.Text>{account.facebookVerified ? account.facebook.hometown ? "Hometown: " + account.facebook.hometown : null : null}</Card.Text>
        {facebookLikesWrapper(account)}
      </Card.Body>
    </Container>          
  </Card>
}