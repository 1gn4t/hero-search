import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./tabsSlice";
import userReducer from "./userSlice";
import searchSlice from "./searchSlice";
import { herousApi } from "./herosApi";

export const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    user: userReducer,
    search: searchSlice,
    [herousApi.reducerPath]: herousApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(herousApi.middleware),
});
