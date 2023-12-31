import { User } from './user';

export interface OrderCreation {
  client: string;
  address: string;
  status: string;
}

export interface Order extends OrderCreation {
  id: number;
}
