import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserOrdersAsync, updateOrderStatus } from '../../api/orderService';
import { RootState, AppDispatch } from '../../app/store';
import { Order } from './../../types/order'
import './order.css'; 
import CreateOrderComponent from './createOrder/createOrder'

const OrderComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { orders, loading, error } = useSelector((state: RootState) => state.order);

  
  const [selectedStatus, setSelectedStatus] = useState<Record<number, string>>({});

  useEffect(() => {
    dispatch(fetchUserOrdersAsync());
  }, [dispatch]);

  const handleStatusChange = (orderId: number, newStatus: string) => {
    setSelectedStatus(prev => ({ ...prev, [orderId]: newStatus }));
  };

  const handleSubmitStatusChange = async (orderId: number) => {
    const status = selectedStatus[orderId];
    if (status) {
      await updateOrderStatus(orderId, status);
      
    }
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="order-container">
      <h1>Seus Pedidos</h1>
      <ul className="order-list">
        {orders.map((order: Order) => (
          <li key={order.id} className="order-item">
            N.º #{order.id} - Pedido: {order.client}
            <select
              value={selectedStatus[order.id] || order.status}
              onChange={(e) => handleStatusChange(order.id, e.target.value)}
            >
              <option value="pending">Pendente</option>
              <option value="processing">Em Processamento</option>
              <option value="shipped">Enviado</option>
              <option value="delivered">Entregue</option>
            </select>
            <button onClick={() => handleSubmitStatusChange(order.id)}>
              Atualizar Status
            </button>
          </li>
        ))}
      </ul>
      <CreateOrderComponent />
    </div>
  );
};

export default OrderComponent;
