import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state, action) => {
      return state - 1;
    },
    changeByValue: (state, action) => {
      return state + action.payload;
    },
  },
});

// exporting actions
export const { increment, decrement, changeByValue } = counterSlice.actions;

// exporting reducer
export const counterReducer = counterSlice.reducer;
