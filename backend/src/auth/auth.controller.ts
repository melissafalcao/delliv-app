import { Controller, Post, Body, HttpException, HttpStatus, UseGuards  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from './local-auth.guard';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      const validate = await this.authService.validateUser(loginDto.email, loginDto.password);
      if(validate) {
        const loginResult = await this.authService.login(validate);
        return loginResult;
      }
    } catch (error) {
      throw new HttpException('Login falhou', HttpStatus.UNAUTHORIZED);
    }
  }
}
