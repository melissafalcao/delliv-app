import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const { client, address, status, userId } = createOrderDto;

    return await this.prismaService.getPrismaClient().order.create({
      data: {
        client,
        address,
        status,
        userId
      },
    });
  }

  async getOrdersByUser(userId: number) {
    return await this.prismaService.getPrismaClient().order.findMany({
      where: {
        userId: userId,
      },
    });
  }

  async updateOrderStatus(orderId: any, newStatus: string) {
    const orderIdInt = parseInt(orderId, 10);
  
    return this.prismaService.getPrismaClient().order.update({
      where: {
        id: orderIdInt,
      },
      data: {
        status: newStatus,
      },
    });
  }
  
}
