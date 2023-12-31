
import { createSlice } from '@reduxjs/toolkit';
import { fetchUserOrdersAsync } from '../../api/orderService';
import { Order } from '../../types/order';

interface OrderState {
  orders: Order[];
  error: string | null;
  loading: Boolean
}

const initialState: OrderState = {
  orders: [],
  error: null,
  loading: false
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserOrdersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserOrdersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchUserOrdersAsync.rejected, (state) => {
        state.loading = false;
        state.error = 'Erro ao carregar pedidos';
      });
  },
});


export default orderSlice.reducer;
