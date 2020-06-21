import React from "react"
import { Redirect } from "react-router-dom"
import { NotFoundRoute } from "../constants/ClientRoutes"

const RedirectRoute : React.FC = () => (
  <Redirect to={NotFoundRoute} />
)

export default RedirectRoute