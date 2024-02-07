import { combineReducers } from "redux";
import dataReducer from "../slices/dataSlice";
import { uiReducer } from "./ui";

export const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});
