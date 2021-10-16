import { combineReducers } from "redux";

import tweets from "./tweets";
import user from "./user";

const rootReducer = combineReducers({
  tweets,
  user,
});

export default rootReducer;
