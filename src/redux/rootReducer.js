import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { filterReducer } from "./reducer";

export const rootReducer = combineReducers({
  items: reducer,
  filter: filterReducer,
});
