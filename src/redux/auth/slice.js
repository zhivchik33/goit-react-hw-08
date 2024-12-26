import { createSlice } from "@reduxjs/toolkit";
import {
  apiGetCurrentUser,
  apiLoginUser,
  apiLogoutUser,
  apiRegisterUser,
} from "./operations";
const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder //regestration
      .addCase(apiRegisterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        // state.user = action.payload.user;
      })
      .addCase(apiRegisterUser.rejected, (state) => {
        state.isLoading = false;
      }) //login
      .addCase(apiLoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user.name = action.payload.user.name;
        // state.user = action.payload.user;
      })
      .addCase(apiLoginUser.rejected, (state) => {
        state.isLoading = false;
      }) //current user//////////////////
      .addCase(apiGetCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(apiGetCurrentUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(apiGetCurrentUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      }) //log out///////////////////
      .addCase(apiLogoutUser.pending, (state) => {
        state.isLoading = true;
        // state.error = null;
      })
      .addCase(apiLogoutUser.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(apiLogoutUser.rejected, (state) => {
        state.isLoading = false;
        // state.error = action.payload;
      }),
});
export const authReducer = authSlice.reducer;
