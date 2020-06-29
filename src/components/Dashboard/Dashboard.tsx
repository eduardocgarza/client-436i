import React, { useContext } from "react"
import { SessionContext } from "../../state/context/SessionContext"

export default function Dashboard () {
  const {api} = useContext (SessionContext)
  console.log (api)
  
  return (
    <div>Dashboard</div>
  )
}