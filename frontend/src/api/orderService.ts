import axios from 'axios';
import { OrderCreation, Order } from '../types/order';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './../app/store'

const API_URL = 'http://localhost:3000/orders'; 
const token = localStorage.getItem('token');

export const createOrderAsync = createAsyncThunk(
  'orders/createOrder',
  async (orderData: OrderCreation) => {
  try {
    const response = await axios.post(`${API_URL}/create`, orderData, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  });
    return response.data;
  } catch (error) {
    console.error('Erro ao criar pedido', error);
    throw error;
  }
});

export const fetchUserOrdersAsync = createAsyncThunk<Order[], void, { state: RootState }>(
  'orders/fetchByUser',
  async () => {
    try {
      const response = await axios.get(`${API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar pedidos', error);
      throw error;
    }
  }
);

export const updateOrderStatus = async (orderId: number, newStatus: any) => {
  try {
    const response = await axios.patch(`${API_URL}/${orderId}/status`, {
      status: newStatus,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, 
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar status do pedido', error);
    throw error;
  }
};
