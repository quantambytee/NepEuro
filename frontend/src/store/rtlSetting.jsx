import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rtl: false,
};

export const counterSlice = createSlice({
  name: "rtl",
  initialState,
  reducers: {
    rtlToggle: (state) => {
      state.rtl = !state.rtl;
    },
  },
});

export const { rtlToggle } = counterSlice.actions;

export default counterSlice.reducer;