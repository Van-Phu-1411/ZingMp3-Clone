import appReducers from "./appReducers";
import { combineReducers } from "redux";
const rootReducers = combineReducers({
  app: appReducers,
});

export default rootReducers;
