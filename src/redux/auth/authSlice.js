import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const handleFulfilledRegister = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledLogIn = handleFulfilledRegister;

const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handlePendingRefreshUser = state => {
  state.isRefreshing = true;
};

const handleFulfilledRefreshUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRejectedRefreshUser = state => {
  state.isRefreshing = false;
};

//==================Slice==================

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder

      .addCase(register.fulfilled, handleFulfilledRegister)
      .addCase(logIn.fulfilled, handleFulfilledLogIn)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.pending, handlePendingRefreshUser)
      .addCase(refreshUser.fulfilled, handleFulfilledRefreshUser)
      .addCase(refreshUser.rejected, handleRejectedRefreshUser);
  },
});

export const authReducer = authSlice.reducer;
