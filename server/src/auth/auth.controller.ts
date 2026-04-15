import { Controller, Post, Get, Body, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto, LoginDto } from './dto/auth.dto';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private config: ConfigService,
  ) {}

  @Post('signup')
  signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  googleAuth() {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleCallback(@Req() req: any, @Res() res: any) {
    const { token } = await this.authService.googleLogin(req.user);
    const clientUrl = this.config.get<string>('CLIENT_URL');
    res.redirect(`${clientUrl}/auth/callback?token=${token}`);
  }
}
