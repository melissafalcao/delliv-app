import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types/user' 
import { createUserAsync } from './../../api/userService'

interface UserState {
  users: User[];
  error: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed'; 
}
  
const initialState: UserState = {
  users: [],
  error: null,
  status: 'idle', 
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.users.push(action.payload);
        }
    },
    extraReducers: (builder) => {
      builder.addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      });
      builder.addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users.push(action.payload);
      });
      builder.addCase(createUserAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Algo deu errado';
      });
    },
  });

export const { createUser } = userSlice.actions
export default userSlice.reducer;