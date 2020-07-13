import React, { createContext, useContext } from "react"

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
  // const api = useAPI ()

  const appContextValue = {
    // friends, 
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