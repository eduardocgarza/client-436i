import React, { useContext } from "react"
import { Route, Redirect, RouteProps } from "react-router-dom"
import { HomeRoute } from "../constants/ClientRoutes"
import { SessionContext } from "../../state/context/SessionContext"

/**
 * @UnauthorizedRoute 
 * 
 * A client is either authorized or unauthorized. When they are not logged in, they are
 *  considered unauthorized and only @UnauthorizedRoute and @PublicRoute objects are 
 *  available; @AuthorizedRoute objects are not available.
 * 
 * When the client attempts to access an @UnauthorizedRoute when they are authorized, 
 *  they are redirected to "/", which is where the Dashboard page sits.
 */
const UnauthorizedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { session } = useContext(SessionContext)

  return (
    <Route {...rest} render={({location}) => (
      !session.isAuthenticated ? (children) : (
        <Redirect 
          to={{
            pathname: HomeRoute,
            state: { from: location }
          }}
        />
      )
    )}>

    </Route>
  )
}

export default UnauthorizedRoute