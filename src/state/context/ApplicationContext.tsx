import React, { createContext, useContext, useState, useEffect } from "react"
import { classmatesTestData, coursesTestData } from "../test/testData"
import { GetAccountRequest } from "../../network/NetworkRequests"
import educonnectionsAPI from "../../network/educonnectionsAPI"


interface Student {
  id: number
  name: string
}

interface Course {
  id: number
  courseDept: string
  courseNumber: string
  students: Student[]
}

export interface Account {
  accountId: string;
  name: string;
  email: string;
  spotifyVerified: boolean;
  spotify: Record<string, any>; // need to make a spotify type here? object has two keys (artists, tracks)
  facebookVerified: boolean;
}

export interface IApplicationContext {
  courses: Course[]
  matches: Student[]
  account: Account
  setAccount: (account: Account) => {}
  setCourses: (courses: Course[]) => {}
}

const initialState = {} as IApplicationContext

const AppContext = createContext<IApplicationContext> (initialState)

export const AppContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>()
  const [matches, setMatches] = useState<Student[]>(classmatesTestData)
  const [account, setAccount] = useState<Account>()
  const [api, setApi] = useState (educonnectionsAPI.getApi())


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