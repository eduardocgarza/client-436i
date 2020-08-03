import IStudent from "../../models/server/IStudent"

export default interface IMatchesState {
  matches: IStudent[]
  setMatches: (s: IStudent[]) => void  
}