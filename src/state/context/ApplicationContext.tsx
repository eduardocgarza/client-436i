import React, { createContext, useContext, useState } from "react"
import { classmatesTestData } from "../test/testData"

interface Student {
  accountId: string
  name: string
}

interface Course {
  courseId: string
  courseDept: string
  courseNumber: string
  students: Student[]
  accounts: Student[]
}

export interface Account {
  accountId: string;
  name: string;
  email: string;
  spotifyVerified: boolean;
  spotify: Record<string, any>; // need to make a spotify type here? object has two keys (artists, tracks)
  facebookVerified: boolean;
}

const initialAccount: Account = {
  accountId: '',
  name: '',
  email: '',
  spotifyVerified: false,
  spotify: {},
  facebookVerified: false
}

export interface IApplicationContext {
  courses: Course[]
  matches: Student[]
  account: Account
  setAccount: (account: Account) => void
  setCourses: (courses: Course[]) => void
}

const initialState = {} as IApplicationContext

const AppContext = createContext<IApplicationContext> (initialState)

export const AppContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>([])
  const [matches, setMatches] = useState<Student[]>(classmatesTestData)
  const [account, setAccount] = useState<Account>(initialAccount)


  const appContextValue = {
    courses,
    matches,
    account,
    setAccount,
    setCourses
  }

  
  return (
    <AppContext.Provider value={appContextValue}>
      {props.children}
    </AppContext.Provider>
  )
}

export default function useAppContext () {
  return useContext (AppContext)
}