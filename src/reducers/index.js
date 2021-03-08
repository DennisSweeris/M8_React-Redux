import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer, // NAME : ACTUAL VALUE
  isLogged: loggedReducer, // Can use shorthand is name === value
});

export default allReducers;
