import { composeWithDevTools } from "redux-devtools-extension"
import { createStore } from "redux"
import rootReducer from "./reducers/rootReducer"

export default createStore(rootReducer, composeWithDevTools())
