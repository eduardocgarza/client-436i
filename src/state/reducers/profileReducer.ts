import { Action } from "../stateTypes"

interface Profile {
  name: string;
  email: string;
}

const initialState: Profile = {
  name: "",
  email: "",
}

export default function profileReducer (state = initialState, action: Action) {
  switch (action.type) {
    case "PROFILE": {
      return {
        ...state,
        name: state.name,
        email: state.email,
      }
    }
    default: {
      return state
    }
  }
}