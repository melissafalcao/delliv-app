import { Controller, Post, Body, UseGuards, Get, Request, Patch, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createOrder(@Body() createOrderDto: CreateOrderDto, @Request() req) {
    const userId = req.user.id;
    createOrderDto.userId = userId;
    return this.orderService.createOrder(createOrderDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user')
  async getOrdersByUser(@Request() req) {
    const userId = req.user.id;
    const orders = await this.orderService.getOrdersByUser(userId);
    return orders;
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/status')
  async updateOrderStatus(@Param('id') orderId: number, @Body('status') newStatus: string) {
    return this.orderService.updateOrderStatus(orderId, newStatus);
  }
}
