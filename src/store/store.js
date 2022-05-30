import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { userReducer } from "./reducers/todoReducer";

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
