import React, { createContext, useState, useEffect } from "react"
import { ISession, TSessionContext } from "../types/ISession"
import { LocalStorageData } from "../localStorage/LocalStorageData"
import verifyServerToken from "../helpers/verifyServerToken"

const initialSession: ISession = {
  isAuthenticated: true,
  token: "",
}
const DEFAULT_VALUE: TSessionContext = [initialSession, (_session: ISession) => {}]

/**
 * @SessionContext 
 */
export const SessionContext = createContext<TSessionContext>(DEFAULT_VALUE)

/**
 * Wrapper Provider Component for the SessionContext
 */
const SessionContextProvider: React.FC = (props) => {
  const [session, setSession] = useState(initialSession)

  useEffect(() => {
    const localStorageToken = localStorage.getItem(LocalStorageData.Session.token)
    /**
     * If no token exists in Session Storage [browser],
     *  add an empty token field there.
     */
    if(!localStorageToken) {
      localStorage.setItem(LocalStorageData.Session.token, session.token)
    }
    /**
     * Else, verify the token was initialized from the 
     *  server through /api/verify
     */
    else {
      verifyServerToken(localStorageToken, setSession)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SessionContext.Provider value={[session, setSession]}>
      {props.children}
    </SessionContext.Provider>
  )
}

export default SessionContextProvider