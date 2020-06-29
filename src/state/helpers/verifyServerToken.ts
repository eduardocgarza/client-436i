import { ISession } from "../types/ISession"
import { VerifySessionRequest } from "../../network/NetworkRequests"
import educonnectionsAPI from "../../network/educonnectionsAPI"

export default async function verifyServerToken (token: string, setSession: (session: ISession) => void) {
  const api = educonnectionsAPI.getApi ()
  
  try {
    const result = await api.request (VerifySessionRequest({ token }))
    console.log("Result from Verify: ", result)
    if (result) {
      setSession({ isAuthenticated: true, token })
    }
    console.log ("Done!")
    return true
  }
  catch (error) {
    return false
  }

}