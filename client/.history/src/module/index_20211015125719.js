import { combineReducers } from "redux";

import tweets from "./tweets";
import user from "./users";

const rootReducer = combineReducers({
  tweets,
  user,
});

export default rootReducer;
