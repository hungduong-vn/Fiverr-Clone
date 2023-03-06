import { combineReducers, createStore } from "redux";
import { layoutReducer } from "./reducers/layoutReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  layoutReducer,
  userReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
