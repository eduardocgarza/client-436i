import React, { useContext } from "react"
import { Route, Redirect, RouteProps } from "react-router-dom"
import { LoginRoute } from "../constants/ClientRoutes"
// import { SessionContext } from "../../appState/context/SessionContext"

/**
 * @AuthorizedRoute 
 */
const AuthorizedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  // const [session] = useContext(SessionContext)
  const isAuthenticated = false

  return (
    <Route {...rest} render={({location}) => (
      isAuthenticated ? (children) : (
        <Redirect 
          to={{
            pathname: LoginRoute,
            state: { 
              from: location,
              errorMessage: "You mut be logged in to view this route." 
            }
          }}
        />
      )
    )}>

    </Route>
  )
}

export default AuthorizedRoute