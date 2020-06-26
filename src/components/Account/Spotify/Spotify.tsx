import React from "react"
import Axios from "axios"
import { Button } from "react-bootstrap"

const CLIENT_ID = "3a22559fa1d84159977d6166a9b5eb75"

// https://developer.spotify.com/documentation/general/guides/scopes/
const scope = [
  // Read access to the list of artists and other users that the user follows.
 "user-follow-read",
  // Read access to a user’s recently played tracks.
  "user-read-recently-played",
  // Read access to a user's "Your Music" library.
  "user-library-read",
  // Read access to a user’s player state.
  "user-read-playback-state",
  // Read access to a user’s currently playing content.
  "user-read-currently-playing",
  // Write access to a user’s playback state
  "user-modify-playback-state",
  // Include collaborative playlists when requesting a user's playlists.
  "playlist-read-collaborative",
  // Read access to user’s email address.
  "user-read-email",
  // Read access to user's private playlists.
  "playlist-read-private",
  // Read access to a user's top artists and tracks.
  "user-top-read",
].toString ()

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