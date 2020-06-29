import educonnectionsAPI from "../../network/educonnectionsAPI"

export interface ISession {
  isAuthenticated: boolean
  token: string
}

export type ISetSession = (session: ISession) => void

export type TSessionContext = {
  api: educonnectionsAPI
  session: ISession
  setSession: ISetSession
}