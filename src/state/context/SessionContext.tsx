import React, { useState, useEffect, useContext } from "react"
import educonnectionsAPI from "../../network/educonnectionsAPI"
import { VerifySessionRequest } from "../../network/NetworkRequests"
import { INITIAL_SESSION, SessionContext } from "../types/state/ISessionState"

export const SessionContextProvider: React.FC = (props) => {
  const [session, setSession] = useState (INITIAL_SESSION)
  const [api, setApi] = useState (educonnectionsAPI.getApi())

  async function verifySession () {
    const localStorageToken = localStorage.getItem ("token")
    if (localStorageToken) {
      try {
        const result = await api.request (VerifySessionRequest ({ 
          token: localStorageToken 
        }))
        console.log ("Verified token: ", result)
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

export default function useSessionContext() {
  return useContext(SessionContext)
}