import React from "react"
import { Button } from "react-bootstrap"
import educonnectionsAPI from "../../../network/educonnectionsAPI"

function redirectToSpotifyAuth () {
  const PRODUCTION_URI = "https://api.educonnections.ca:5000/spotify/authorize"
  const DEVELOPMENT_URI = "http://localhost:5000/spotify/authorize"
  window.location.href = window.location.href.includes ("localhost") ? DEVELOPMENT_URI : PRODUCTION_URI
}

async function authorizeSpotify () {
  try {
    redirectToSpotifyAuth ()
  }
  catch (error) {
    console.log("Error: ", error)
    return error
  }
}

export default function Spotify () {
  const api = educonnectionsAPI.getApi ()
  console.log ("APi: ", api)
  
  async function handleAuthorize () {
    console.log ("Beginning authorize...")
    authorizeSpotify ()
  }
  
  return (
    <div>
      <h1>Spotify</h1>
      <Button variant="success" onClick={handleAuthorize}>Authorize Spotify</Button>
    </div>
  )
}