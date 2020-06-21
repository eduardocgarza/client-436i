import React, { createContext, useContext } from "react"
import Axios, { AxiosInstance } from "axios"
import { BASE_URL } from "./types/NetworkConstants"

export class educonnectionsAPI {
  axios: AxiosInstance

  constructor() {
    this.axios = Axios.create({
      baseURL: BASE_URL
    })

    this.axios.interceptors.response.use (
      response => response, 
      (error) => {
        if (error && error.response && error.response.data && error.response.data.error) {
          console.log ("Error: ", error.response.data.error)
          return Promise.reject (error.response.data.error)
        }
        return Promise.reject (error)
    })
  }

  addAccessToken(accessToken: string) {
    const authorizationHeader = {
      "Authorization": `Bearer: ${accessToken}`
    }
    
    this.axios.defaults.headers.common = authorizationHeader
  }

  removeAccessToken() {
    delete this.axios.defaults.headers.common["Authorization"]
  }
}

export const APIContext = createContext (new educonnectionsAPI ())

/**
 * @Provider
 */
export const APIProvider: React.FC = (props) => {
  const api = new educonnectionsAPI ()
  
  return (
    <APIContext.Provider value={api}>
      {props.children}
    </APIContext.Provider>
  )
}

/**
 * @Consumer
 */
export function useAPI () {
  const api = useContext (APIContext)
  return api
}