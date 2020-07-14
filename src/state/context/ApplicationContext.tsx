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
  matches: Student[]
}

const initialState = {} as IApplicationContext

const AppContext = createContext<IApplicationContext> (initialState)

export const AppContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>(coursesTestData)
  const [matches, setMatches] = useState<Student[]>(classmatesTestData)

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