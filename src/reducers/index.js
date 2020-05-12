import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import User from "../reducers/user";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    User
    // Outros reducers aqui
  });
