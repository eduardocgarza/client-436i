import React, { createContext, useContext, useState } from "react"
import { classmatesTestData, coursesTestData } from "../test/testData"

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

export interface IApplicationContext {
  courses: Course[]
  matches: IMatches
}

const initialState = {} as IApplicationContext

const AppContext = createContext<IApplicationContext> (initialState)

interface IMatches {
  matches: Student[]
  setMatches: (s: Student[]) => void
}

function useMatches() {
  const [matches, setMatches] = useState<Student[]>(classmatesTestData)
  return { matches, setMatches }
}

export const AppContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>(coursesTestData)
  const matches = useMatches()

  const appContextValue = {
    courses,
    matches
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