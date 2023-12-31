import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from './../types/user';

const API_URL = 'http://localhost:3000/'; 

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}auth/login`, userData); 
      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
      }
      const token = localStorage.getItem('token');

      return response.data.access_token;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue('Ocorreu um erro desconhecido');
    }
  }
);
