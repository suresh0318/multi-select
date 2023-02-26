import { createSlice } from "@reduxjs/toolkit";

const arraySlice = createSlice({
  name: "array",
  initialState: [],
  reducers: {
    apush(state, action) {
      state.push(state.length + 1);
    },
    apop(state, action) {
      state.pop();
    },
  },
});

export const { apush, apop } = arraySlice.actions;
export default arraySlice.reducer;
