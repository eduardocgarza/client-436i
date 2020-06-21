import { LOGIN_SUCCESS, SIGNUP_SUCCESS } from "../actions/actionTypes"
import { Action } from "../stateTypes"

const initialState = {
  isLoggedIn: false
}

export default function authReducer (state = initialState, action: Action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { 
        ...state, 
        isLoggedIn: true,
      }
    }
    case SIGNUP_SUCCESS: {
      return { 
        ...state, 
        isLoggedIn: true, 
      }
    }
    default: {
      return state
    }
  }
}