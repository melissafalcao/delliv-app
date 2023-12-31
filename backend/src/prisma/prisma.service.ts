import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getPrismaClient() {
    return this.prisma;
  }

  async createUser(data: {
    name: string;
    email: string;
    password: string;
  }) {
    return await this.prisma.user.create({
      data,
    });
  }

  async createOrder(data: {
    client: string;
    address: string;
    status: string;
    id?: number;
  }) {
    return await this.prisma.order.create({
      data,
    });
  }

  async getUserById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async getOrderByUserId(id: number) {
    return await this.prisma.order.findMany({
      where: {
        id,
      },
    });
  }

  async deleteOrder(id: number) {
    return await this.prisma.order.delete({
      where: {
        id,
      },
    });
  }

  async deleteUser(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
