import React from "react"
import MatchItem from "../MatchItem/MatchItem"
import "../MyMatches/MyMatches.css"

export default function MyMatches () {
  return (
    <body>
      <h1>My Matches</h1>
      <div>
        <MatchItem/>
        <MatchItem/>
      </div>
    </body>
  )
}