import React, { createContext, useContext, useState, useEffect } from "react"

/**
 * @Network
 */
import { useAPI } from "../../network/educonnectionsAPI"

export interface IApplicationContext {
  // friends: Friend[];
}

const initialState = {} as IApplicationContext

const AppContext = createContext<IApplicationContext> (initialState)

/**
 * @Provider
 */
export const AppContextProvider: React.FC = (props) => {
  // const [friends, setFriends] = useState<Friend[]> ([])
  const api = useAPI ()

  const appContextValue = {
    // friends, 
  }
  
  return (
    <AppContext.Provider value={appContextValue}>
      {props.children}
    </AppContext.Provider>
  )
}

/**
 * @Consumer
 */
export default function useAppContext () {
  return useContext (AppContext)
}