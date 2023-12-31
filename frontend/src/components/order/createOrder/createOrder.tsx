import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './../../../app/store';
import { createOrderAsync } from './../../../api/orderService';

const CreateOrderComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [client, setClient] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [status, setStatus] = useState<string>('pending'); 

  const handleCreateOrder = (e: FormEvent) => {
    e.preventDefault();
    
    const data = {
      client: client,
      address: address,
      status: status,
    };
  
    dispatch(createOrderAsync(data));
  };

  return (
    <div className="register-container">
      <form onSubmit={handleCreateOrder} className="register-form">
        <h1>Novo Pedido</h1>
        <input 
          type="text"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          placeholder="Nome do Pedido"
        />
        <input 
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Endereço"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pendente</option>
          <option value="processing">Em Processamento</option>
          <option value="shipped">Enviado</option>
          <option value="delivered">Entregue</option>
        </select>
        <button type="submit">Criar Pedido</button>
      </form>
    </div>
  );
};

export default CreateOrderComponent;
