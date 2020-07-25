import { createContext } from "react"
import educonnectionsAPI from "../../../network/educonnectionsAPI"

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

export const INITIAL_SESSION: ISession = {
  isAuthenticated: false,
  token: "",
}

const DEFAULT_VALUE: TSessionContext = {
  api: educonnectionsAPI.getApi(),
  session: INITIAL_SESSION,
  setSession: (_session: ISession) => {}
}

export const SessionContext = createContext<TSessionContext>(DEFAULT_VALUE)