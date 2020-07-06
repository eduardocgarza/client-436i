import React from "react"
import "../ClassInfo/ClassInfo.css"
import MatchItem from "../../Matches/MatchItem/MatchItem";

export default function ClassInfo () {
  return (
    <div className="classInfo">
      <h2>CPSC ...</h2>
      <div className="classMate">Classmates 2</div>
      <MatchItem/>
      <MatchItem/>
    </div>
  )
}