import { TSessionContext } from "../types/state/ISessionState"

export default function handleSessionLogout (sessionContext: TSessionContext) {
  const { api, session, setSession } = sessionContext
  
  localStorage.setItem("token", "")
  setSession ({ 
    ...session, 
    isAuthenticated: false,
    token: ""
  })
  api.clearAccessToken ()
}