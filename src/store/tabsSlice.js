import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  powerstats: true,
  biography: false,
  appearance: false,
  connections: false,
};

export const counterSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setTab(state, { payload }) {
      for (let prop in state) {
        state[prop] = false;
        state[payload] = true;
      }
    },
  },
});

export const { setTab } = counterSlice.actions;

export default counterSlice.reducer;
