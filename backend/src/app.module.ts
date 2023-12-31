import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module'
import { OrderModule } from './orders/order.module';
import { DatabaseModule } from './database/database.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [UserModule, OrderModule, DatabaseModule, AuthModule],
})
export class AppModule {}
