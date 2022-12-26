import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/userApi";
import jwtDecode from "jwt-decode";

export const userSlice = createSlice({
  name: "userList",
  initialState: {
    isPending: false,
    currentUser: {},
    authorUser: {},
    accessToken: null,
    isLoggedIn: null,
    loginError: null,
    registerError: null,
    registerSuccess: null,
  },

  extraReducers: (builder) => {
    builder

      .addCase(getAuthorUser.pending, (state) => {
        state.authorUser = null;
        state.isPending = true;
      })

      .addCase(getAuthorUser.fulfilled, (state, action) => {
        state.isPending = false;
        state.authorUser = action.payload.data;
      })

      .addCase(createUser.pending, (state, action) => {
        state.isPending = true;
      })

      .addCase(createUser.fulfilled, (state, action) => {
        state.isPending = false;
        state.registerSuccess = action.payload.message;
        state.users = action.payload.data;
        state.registerError = null;
        state.loginError = null;
      })

      .addCase(createUser.rejected, (state, action) => {
        state.isPending = false;
        state.registerError = action.payload;
        state.loginError = null;
        state.registerSuccess = null;
      })

      .addCase(loginUser.pending, (state, action) => {
        state.isPending = true;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.isPending = false;
        state.isLoggedIn = true;
        state.currentUser = action.payload.data.data;
        state.accessToken = action.payload.data.accessToken;
        state.loginError = null;
        state.registerSuccess = null;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.isPending = false;
        state.loginError = action.payload;
        state.registerSuccess = null;
      })

      .addCase(editUser.fulfilled, (state, action) => {
        state.isPending = false;
        state.currentUser = action.payload.data;
      })

      .addCase(refreshToken.fulfilled, (state, action) => {
        state.isPending = false;
        state.accessToken = action.payload.data;
      })

      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isPending = false;
        state.currentUser = {};
        state.isLoggedIn = false;
        state.accessToken = null;
        state.loginError = null;
        state.registerSuccess = null;
        state.registerError = null;
      });
  },
});

export const createUser = createAsyncThunk(
  "userList/createUser",
  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await api.createUser(newUser);
      return data;
    } catch (err) {
      if (err?.response?.data.message)
        return rejectWithValue(err.response.data.message);

      return err.message;
    }
  }
);

export const loginUser = createAsyncThunk(
  "userList/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const res = await api.loginUser(user);
      return res;
    } catch (err) {
      if (err?.response?.data.message) {
        return rejectWithValue(err.response.data.message);
      }

      return err.message;
    }
  }
);

export const getAuthorUser = createAsyncThunk(
  "userList/getAuthorUser",
  async (author) => {
    const { data } = await api.getAuthorUser(author);
    return data;
  }
);

export const editUser = createAsyncThunk("userList/editUser", async (user) => {
  const { userId, userData } = user;
  const { data } = await api.editUser(userId, userData);
  return data;
});

export const refreshToken = createAsyncThunk(
  "userList/refreshToken",
  async () => {
    const { data } = await api.refreshToken();
    return data;
  }
);

export const logoutUser = createAsyncThunk("userList/logoutUser", async () => {
  const { message } = await api.logoutUser();
  return message;
});
