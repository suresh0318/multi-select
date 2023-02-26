import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "names",
  initialState: "",
  reducers: {
    aname: (state, action) => action.payload,
  },
});

export const { aname } = nameSlice.actions;
export default nameSlice.reducer;
