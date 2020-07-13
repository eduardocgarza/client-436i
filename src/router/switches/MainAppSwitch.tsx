import React from "react"
import styled from "styled-components"
import { Switch, Route } from "react-router-dom"

/**
 * @Components
 */
import RedirectRoute from "../routes/RedirectRoute"
import NotFound from "../../components/Shared/NotFound/NotFound"

/**
 * @Routers
 */
import AuthSwitch from "./AuthSwitch"
import HomeRouter from "../routers/HomeRouter"
import PublicSwitch from "./PublicSwitch"
import UnauthSwitch from "./UnauthSwitch"
import { NotFoundRoute, CatchAllRoute, HomeRoute } from "../constants/ClientRoutes"
import UnauthorizedRoute from "../routes/UnauthorizedRoute"
import { IRoute } from "../constants/IClientRoute"
import AuthorizedRoute from "../routes/AuthorizedRoute"
import { AppContextProvider } from "../../state/context/ApplicationContext"
import SpotifyAPI from "../apis/SpotifyAPI"

const AppContent = styled.section`
  min-height: 90vh;
  margin: 0 auto;
  width: 80%;
`

export default function MainAppSwitch () {
  return (
    <AppContent>
      <Switch>
        <Route path="/spotify">
          <SpotifyAPI />
        </Route>
        
        {/* Public Routes : Accessible at all times to 
          all users */}
        {PublicSwitch.map((route: IRoute) => (
          <Route path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}

        {/* Unauthenticated Routes : Accessible only to 
          unauthenticated users */}
        {UnauthSwitch.map((route: IRoute) => (
          <UnauthorizedRoute path={route.path} key={route.path}>
            <route.component />
          </UnauthorizedRoute>
        ))}

        {/* Authenticated Routes : Accessible only to 
          authenticated users */}
          <AppContextProvider>
            {/* Home Component : Renders the Homepage or Dashboard
              whether the user is authenticated or not */}
            <Route exact path={HomeRoute}>
              <HomeRouter />
            </Route>
            
            {AuthSwitch.map((route: IRoute) => (
              <AuthorizedRoute path={route.path} key={route.path} exact>
                <route.component />
              </AuthorizedRoute>
            ))}
          </AppContextProvider>

        {/* Not Found Component : Renders on Error when a 
          page cannot be accessed */}
        <Route path={NotFoundRoute}>
          <NotFound />
        </Route>

        {/* Catch-All Route : Catches all other routes and 
          redirects them to the NotFound Component*/}
        <Route path={CatchAllRoute}>
          <RedirectRoute />
        </Route>
      </Switch>
    </AppContent>
  )
}