import { applyMiddleware, compose, createStore } from "redux";
import { userReducer } from "./reducer";
import thunk from "redux-thunk";
const devtools =window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(userReducer, compose(applyMiddleware(thunk),devtools));
