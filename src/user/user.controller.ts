// src/user/user.controller.ts

import { Controller, Post, Body, Get, Param, UseGuards ,Req, UnauthorizedException} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto); // Returns the JWT token
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto); // Returns the JWT token
  }

  @Post('logout')
  @UseGuards(AuthGuard('jwt')) // Optional: Protect the logout route if needed
  async logout(@Req() req: Request) {
    const  token = (req.headers as any).authorization?.split(' ')[1]; // Get the token from the Authorization header
    if (token) {
      await this.userService.logout(token);
      return { message: 'Logged out successfully' };
    }
    throw new UnauthorizedException('No token provided');
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  getProfile(@Param('email') email: string) {
    return this.userService.getProfile(email); 
}}
