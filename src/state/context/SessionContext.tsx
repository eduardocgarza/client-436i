import React, { createContext, useState, useEffect } from "react"
import { ISession, TSessionContext } from "../types/ISession"
import educonnectionsAPI from "../../network/educonnectionsAPI"
import { VerifySessionRequest } from "../../network/NetworkRequests"

const initialSession: ISession = {
  isAuthenticated: false,
  token: "",
}

const DEFAULT_VALUE: TSessionContext = {
  api: new educonnectionsAPI (),
  session: initialSession,
  setSession: (_session: ISession) => {}
}

export const SessionContext = createContext<TSessionContext>(DEFAULT_VALUE)

const SessionContextProvider: React.FC = (props) => {
  const [session, setSession] = useState (initialSession)
  const [api, setApi] = useState (new educonnectionsAPI ())

  async function verifySession () {
    const localStorageToken = localStorage.getItem ("token")
    if (localStorageToken) {
      try {
        await api.request (VerifySessionRequest ({ token: localStorageToken }))
        console.log ("Verified token")
        setSession ({
          isAuthenticated: true,
          token: localStorageToken
        })
        api.addAccessToken (localStorageToken)
        setApi (api)
      }
      catch (error) {
        console.log ("Error: ", error)
      }
    }
  }
  
  useEffect (() => {
    verifySession ()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const sessionContextValue = { api, session, setSession }
  return (
    <SessionContext.Provider value={sessionContextValue}>
      {props.children}
    </SessionContext.Provider>
  )
}

export default SessionContextProvider