export interface ISession {
  isAuthenticated: boolean
  token: string
}

export type ISetSession = (session: ISession) => void
export type TSessionContext = [ISession, (s: ISession) => void]