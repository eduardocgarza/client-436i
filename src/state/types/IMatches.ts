import IStudent from "./IStudent"

export default interface IMatchesState {
  matches: IStudent[]
  setMatches: (s: IStudent[]) => void  
}