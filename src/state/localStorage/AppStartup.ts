// import { useSessionContext } from "../context/SessionContext"
// import { puntipinAPI } from "../network/Route"
// import { VerifySessionRoute } from "../network/ServerRoutes"

// export const LocalStorageData = {
//   Session: {
//     accessToken: "access_token"
//   }
// }

// export function ClearClient () {
//   const [sessionContext, updateSessionContext] = useSessionContext()

//   updateSessionContext({
//     ...sessionContext,
//     isAuthenticated: false,
//     loadingToken: false,
//     accessToken: ""
//   })
// }

// async function AppStartup() {
//   const [sessionContext, updateSessionContext] = useSessionContext()
  
//   console.log("Running the Application startup function...")
  
//   /**
//    * If token does not exist in Local Storage, clear session
//    *  from context
//    */
//   const accessToken = localStorage.getItem(LocalStorageData.Session.accessToken)
//   if(!accessToken) {
//     console.log("Token was not found in Local Storage")
//     return ClearClient()
//   }
  
//   console.log("Access token found in Local Storage. Beginning request to authenticate it...")
//   console.log("Access Token: ", accessToken)
//   updateSessionContext({ ...sessionContext, loadingToken: true })
  
//   /**
//    * Else, check if the token is valid
//    */
//   try {
//     const result = await puntipinAPI.axios.post(VerifySessionRoute.url, { accessToken })
//     if(!result) {
//       console.log("Token was checked in the server and is not valid")
//       return ClearClient()
//     }
    
//     const { accessToken: newAccessToken } = result.data
//     if(!newAccessToken) {
//       console.log("Server failed...")
//       return ClearClient()
//     }
//     else {
//       console.log("Token is valid... saving to Local Storage and Context")
//       localStorage.setItem(LocalStorageData.Session.accessToken, newAccessToken)
      
//       return updateSessionContext({
//         ...sessionContext,
//         isAuthenticated: true,
//         accessToken: newAccessToken
//       })
//     }
//   }
//   catch (e) {
//     console.log("Server request failed to go through.. Likely that the server is down.")
//     return ClearClient ()
//   }

// }

// export default AppStartup

const a = {}

export default a