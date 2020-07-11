import React from "react"
import AppRouter from "./router/routers/AppRouter"
import SessionContextProvider from "./state/context/SessionContext"

// import MyClasses from "./components/Classes/MyClasses/MyClasses"
// import MyMatches from "./components/Matches/MyMatches/MyMatches"
import Facebook from "./components/Social-Media/Facebook"

export default function App() {
  return (
    <SessionContextProvider>
      {/* <AppRouter /> */}
      
      {/* <MyClasses /> */}
      {/* <MyMatches/> */}
      <Facebook/>
    </SessionContextProvider>
  )
}
