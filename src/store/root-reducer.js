import { combineReducers } from "redux";

import { searchReducer } from "./search/search.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
});
