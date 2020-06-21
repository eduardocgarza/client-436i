import { HttpMethodTypes } from "./HttpMethodTypes"

export default class Request {
  method: HttpMethodTypes
  url: string
  data?: Object
  params?: Object
  
  constructor(method: HttpMethodTypes, url: string, data?: Object,params?: Object) {
    this.method = method
    this.url = url
    this.data = data || undefined
    this.params = params || undefined
  }
}