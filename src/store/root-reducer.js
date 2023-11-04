import { combineReducers } from "redux";

import { searchReducer } from "./search/search.reducer";
import { userReducer } from "./user/user.reducer";
import { tabsReducer } from "./tabs/tabs.reducer";

export const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  tabs: tabsReducer,
});
