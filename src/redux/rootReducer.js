import { combineReducers } from "redux";
import { contactReducer, filterReducer, loadingReducer } from "./reducer";

export const rootReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
  loading: loadingReducer,
});
