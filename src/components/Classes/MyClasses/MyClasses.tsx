import React from "react"
import Box from '@material-ui/core/Box';
import ClassItem from "../ClassItem/ClassItem"
import ClassInfo from "../ClassInfo/ClassInfo"
import "../MyClasses/MyClasses.css"

export default function MyClasses () {
  return (
    <body>
      <h1>My Classes</h1>
      <div>
        <ClassItem/>
        <ClassItem/>
      </div>
      <div>
        <ClassInfo/>
        <ClassInfo/>
      </div>
    </body>
  )
}