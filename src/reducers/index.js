import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "../reducers/user";
import feed from "../reducers/feed"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    user,
    feed
    // Outros reducers aqui
  });
