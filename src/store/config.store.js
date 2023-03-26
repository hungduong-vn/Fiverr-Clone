import { combineReducers, createStore } from "redux";
import jobReducer from "./reducers/jobReducer";
import { layoutReducer } from "./reducers/layoutReducer";
import { userReducer } from "./reducers/userReducer";
import { viewReducer } from "./reducers/viewReducer";

const rootReducer = combineReducers({
  layoutReducer,
  userReducer,
  viewReducer,
  jobReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
