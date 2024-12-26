import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
  // headers: {
  //     "Authorization": "Bearer ${token}"
});

export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = "";
};

export const apiRegisterUser = createAsyncThunk(
  "auth/registerUser",
  async (signUpDto, thunkAPI) => {
    try {
      const { data } = await authInstance.post("/users/signup", signUpDto);

      console.log("Response data signup:", data);

      setToken(data.token);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginDto, thunkApi) => {
    try {
      const { data } = await authInstance.post("/users/login", loginDto);
      console.log("Response data login:", data);
      setToken(data.token);
      console.log("Form Data:", loginDto);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkApi.rejectWithValue("No token provided to refresh user data");
    }

    try {
      setToken(token);
      const { data } = await authInstance.get("/users/current");

      console.log("data: ", data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiLogoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkApi) => {
    try {
      const { data } = await authInstance.post("/users/logout");

      clearToken();
      console.log("data: ", data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
