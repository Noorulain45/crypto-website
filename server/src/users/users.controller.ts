import { Controller, Get, Put, Body, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() req: any) {
    const user = await this.usersService.findById(req.user.userId);
    const { password, ...result } = user?.toObject() ?? {};
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Put('profile')
  async updateProfile(@Req() req: any, @Body() body: { name?: string; avatar?: string }) {
    return this.usersService.updateProfile(req.user.userId, body);
  }
}
