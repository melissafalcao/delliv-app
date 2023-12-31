import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from './../types/user';

const API_URL = 'http://localhost:3000/users'; 

export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData: User) => {
    try {
      const response = await axios.post(API_URL, userData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar usuário', error);
      throw error;
    }
  }
);

export const createUser = async (userData: User) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    
    console.error('Erro ao criar usuário', error);
    throw error;
  }
};

export const getUserById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuário', error);
    throw error;
  }
};

