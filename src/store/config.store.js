import { combineReducers, createStore } from "redux";
import { layoutReducer } from "./reducers/layoutReducer";

const rootReducer = combineReducers({
  layoutReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);