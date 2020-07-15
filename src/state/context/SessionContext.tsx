import React, { createContext, useState, useEffect, useContext } from "react"
import { ISession, TSessionContext } from "../types/ISession"
import educonnectionsAPI from "../../network/educonnectionsAPI"
import { VerifySessionRequest } from "../../network/NetworkRequests"

const initialSession: ISession = {
  isAuthenticated: false,
  token: "",
}

const DEFAULT_VALUE: TSessionContext = {
  api: educonnectionsAPI.getApi(),
  session: initialSession,
  setSession: (_session: ISession) => {}
}

export const SessionContext = createContext<TSessionContext>(DEFAULT_VALUE)

export const SessionContextProvider: React.FC = (props) => {
  const [session, setSession] = useState (initialSession)
  const [api, setApi] = useState (educonnectionsAPI.getApi())

  async function verifySession () {
    const localStorageToken = localStorage.getItem ("token")
    if (localStorageToken) {
      console.log("sessionContext object: ", SessionContext)
      try {
        const result = await api.request (VerifySessionRequest ({ token: localStorageToken }))
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