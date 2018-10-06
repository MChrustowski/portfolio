import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import posts from "./reducers/posts";

const rootReducer = combineReducers({
  posts,
});

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
