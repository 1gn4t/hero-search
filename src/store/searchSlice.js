import { createSlice } from "@reduxjs/toolkit";
import { INIT_HERO } from "../utils/init-hero";

const initialState = {
  herosMap: [],
  herosMapError: null,
  searchStr: "",
  currHero: INIT_HERO,
  sizeList: 5,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setHerosMap(state, { payload }) {
      if (payload) {
        state.herosMap = payload.slice(0, 5);
      }
    },
    setSearchString(state, { payload }) {
      state.searchStr = payload;
    },
    setCurrHero(state, { payload }) {
      state.currHero = state.herosMap.find((hero) => hero.id === payload);
      state.herosMap = [];
      state.searchStr = "";
    },
  },
});

export const { setSearchString, setCurrHero, setHerosMap } =
  searchSlice.actions;
export default searchSlice.reducer;
