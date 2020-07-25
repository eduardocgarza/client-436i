import { createContext } from "react"
import IAccountState from "../IAccount"
import ICoursesState from "../ICourses"
import IMatchesState from "../IMatches"

export interface IApplicationContext {
  accountState: IAccountState
  coursesState: ICoursesState
  matchesState: IMatchesState
}

const INITIAL_APPLICATION = {} as IApplicationContext

export const AppContext = createContext<IApplicationContext> (INITIAL_APPLICATION)