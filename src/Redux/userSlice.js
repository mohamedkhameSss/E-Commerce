import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFitching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFitching = true;
    },
    loginSuccess: (state, action) => {
      state.isFitching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFitching = false;
      state.error = true;
    },
  },
});
export const { loginFailure, loginStart, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
