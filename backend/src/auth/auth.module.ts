import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from './../database/database.module';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'suaChaveSecreta',
      signOptions: { expiresIn: '1h' },
    }),
    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService, 
    JwtService, 
    LocalStrategy, 
    JwtStrategy
  ],
  exports: [AuthService],
})
export class AuthModule {}