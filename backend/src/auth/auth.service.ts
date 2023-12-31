import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService, 
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prismaService.getPrismaClient().user.findUnique({
      where: {
        email,
      },
    });

    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    try {
      
      const token = this.jwtService.sign(payload, { secret: 'suaChaveSecreta' });
      return {
        access_token: token,
      };
    } catch (error) {
      console.error('Erro ao gerar token JWT:', error);
    }
  }
  
}
