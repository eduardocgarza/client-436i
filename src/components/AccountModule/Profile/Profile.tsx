import React from "react"
import FacebookLogin from "../FacebookLogin/FacebookLogin"
import Spotify from "../Spotify/Spotify"

export default function Profile() {
  return (
    <div className="profile-main">
      <hr/>
      <FacebookLogin />
      <hr/>
    </div>
  )
}
