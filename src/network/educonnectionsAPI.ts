import Axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { BASE_URL } from "./types/NetworkConstants"
import Request from "./types/Request"
import { VerifySessionRequest } from "./NetworkRequests"

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
  private token: string
  private tokenVerified: boolean
  private static api: educonnectionsAPI
  
  private constructor () {
    const localStorageToken = localStorage.getItem ("token")
    if (!localStorageToken) {
      localStorage.setItem ("token", "")
      this.token = ""
    }
    else {
      this.token = localStorageToken
    }
    
    this.tokenVerified = false
    this.axios = Axios.create({ baseURL: BASE_URL })
    this.axios.interceptors.response.use (response => response, axiosErrorCallback)
  }

  public static getApi () {
    if (!educonnectionsAPI.api) {
      educonnectionsAPI.api = new educonnectionsAPI ()
    }
    return educonnectionsAPI.api
  }

  public addAccessToken (accessToken: string) {
    console.log ("Adding access token...")
    const authorizationHeader = {
      "Authorization": `Bearer: ${accessToken}`
    }
    this.axios.defaults.headers.common = authorizationHeader
    this.tokenVerified = true
    console.log ("Added accessToken [complete]")
  }
  
  public clearAccessToken () {
    console.log ("Removing access token")
    this.tokenVerified = false
    delete this.axios.defaults.headers.common["Authorization"]
  }

  
  public async request (req: Request) {
    // if (!this.tokenVerified) {
    //   try {
    //     console.log ("Verifying request...")
    //     await this.axios.request (VerifySessionRequest ({ token: this.token }))
    //     this.addAccessToken (this.token)
    //     console.log ("Token valid... returning promise")
    //     return this.axios (req)
    //   }
    //   catch (error) {
    //     throw new Error ("token is invalid: " + error)
    //   }
    // }
    return this.axios (req)
  }

  public async requestWithConfig (config: AxiosRequestConfig) {
    if (!this.tokenVerified) {
      try {
        console.log ("Verifying request...")
        await this.axios.request (VerifySessionRequest ({ token: this.token }))
        this.addAccessToken (this.token)
        console.log ("Token valid... returning promise")
        return this.axios (config)
      }
      catch (error) {
        throw new Error ("token is invalid: " + error)
      }
    }
    return this.axios (config)
  }
}
