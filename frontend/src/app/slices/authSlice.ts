import { createSlice, PayloadAction, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { loginUser } from './../../api/authService';
import { User } from '../../types/user';

interface AuthState {
  user: User | null;
  token: string;
  isLoading: boolean;
  error: string | undefined;
  isAuthenticated: boolean; 
}

const initialState: AuthState = {
  user: null,
  token: '',
  isLoading: false,
  error: undefined,
  isAuthenticated: false, 
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = undefined;
      state.isAuthenticated = true; 
    },
    loginUserFailure: (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.token = '';
      state.error = action.payload;
      state.isAuthenticated = false; 
    },
    logout: (state) => {
      state.user = null;
      state.token = '';
      state.error = undefined;
      state.isAuthenticated = false; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false; 
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = undefined;
        state.isAuthenticated = true; 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error ? action.error.message : 'Ocorreu um erro desconhecido';
        state.isAuthenticated = false; 
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
