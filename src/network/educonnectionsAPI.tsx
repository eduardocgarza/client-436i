import React, { createContext, useContext } from "react"
import Axios, { AxiosInstance } from "axios"
import { BASE_URL } from "./types/NetworkConstants"
import Request from "./types/Request"

function axiosErrorCallback (error: any) {
  if (
    error && 
    error.response && 
    error.response.data && 
    error.response.data.error
  ) {
    return Promise.reject (error.response.data.error)
  }
  return Promise.reject (error)
}

export default class educonnectionsAPI {
  private axios: AxiosInstance
  private static api: educonnectionsAPI

  private constructor() {
    this.axios = Axios.create({ baseURL: BASE_URL })
    this.axios.interceptors.response.use (response => response, axiosErrorCallback)
  }

  public static getApi (): educonnectionsAPI {
    console.log ("Getting api")
    if (!educonnectionsAPI.api) {
      educonnectionsAPI.initApi ()
    }
    return educonnectionsAPI.api
  }
  
  public static initApi () {
    console.log ("Initializing api")
    if (!educonnectionsAPI.api) {
      educonnectionsAPI.api = new educonnectionsAPI ()
    }
  }

  public addAccessToken (accessToken: string) {
    console.log ("Adding access token")
    const authorizationHeader = {
      "Authorization": `Bearer: ${accessToken}`
    }
    this.axios.defaults.headers.common = authorizationHeader
  }
  
  public removeAccessToken () {
    console.log ("Removing access token")
    delete this.axios.defaults.headers.common["Authorization"]
  }
  
  public request (req: Request) {
    console.log ("Making request")
    return this.axios (req)
  }
}

export const APIContext = createContext (educonnectionsAPI.getApi ())

/**
 * @Provider
 */
export const APIProvider: React.FC = (props) => {
  const api = educonnectionsAPI.getApi ()
  console.log ("Callign Provider")
  return (
    <APIContext.Provider value={api}>
      {props.children}
    </APIContext.Provider>
  )
}

export function useEduconnectionsApi () {
  const api = useContext (APIContext)
  return api
}