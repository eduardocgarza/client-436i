import React, { useContext } from "react"
import useAccount from "../hooks/useAccount"
import useCourses from "../hooks/useCourses"
import useMatches from "../hooks/useMatches"
import { AppContext } from "../types/state/IApplicationState"

export const AppContextProvider: React.FC = (props) => {
  const accountState = useAccount()
  const coursesState = useCourses()
  const matchesState = useMatches()

  const appContextValue = {
    accountState,
    coursesState,
    matchesState,
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