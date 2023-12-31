import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { Certificate } from 'crypto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    const name = createUserDto.name;
    const email = createUserDto.email;
    const password = await bcrypt.hash(createUserDto.password, 10);


    
    const existingUser = await this.prismaService.getPrismaClient().user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new ConflictException('E-mail já está em uso');
    }

    
    return await this.prismaService.getPrismaClient().user.create({
      data: {
        name,
        email,
        password, 
      },
    });
  }

  async findOne(email: string) {
    return await this.prismaService.getPrismaClient().user.findUnique({
      where: { email },
    });
  }

  
}
