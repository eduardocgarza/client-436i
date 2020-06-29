import React, { createContext, useState, useEffect } from "react"
import { ISession, TSessionContext } from "../types/ISession"
import verifyServerToken from "../helpers/verifyServerToken"
import educonnectionsAPI from "../../network/educonnectionsAPI"

const initialSession: ISession = {
  isAuthenticated: false,
  token: "",
}

const DEFAULT_VALUE: TSessionContext = [initialSession, (_session: ISession) => {}]
export const SessionContext = createContext<TSessionContext>(DEFAULT_VALUE)

const SessionContextProvider: React.FC = (props) => {
  const [session, setSession] = useState (initialSession)
  const api = educonnectionsAPI.getApi ()

  useEffect(() => {
    console.log ("Running useEffect in SessionContext")
    const localStorageToken = localStorage.getItem ("token")
    console.log ("Storage: ", localStorageToken)
    /**
     * If no token exists in Session Storage [browser],
     *  add an empty token field there.
     */
    if(!localStorageToken) {
      localStorage.setItem("token", "")
    }
    /**
     * Else, verify the token was initialized from the 
     *  server through /api/verify
     */
    else {
      verifyServerToken (localStorageToken, setSession)
      .then (isValid => {
        if (isValid) {
          api.addAccessToken (localStorageToken)
        } 
        else {
          api.clearAccessToken ()
        }
      })
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