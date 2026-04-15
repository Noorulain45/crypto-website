import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';
import { SignupDto, LoginDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  private signToken(userId: string, email: string, role: string) {
    return this.jwtService.sign({ sub: userId, email, role });
  }

  async signup(dto: SignupDto) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) throw new ConflictException('Email already in use');

    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.usersService.create({ ...dto, password: hashed });

    return { token: this.signToken(user._id.toString(), user.email, user.role) };
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user || !user.password) throw new UnauthorizedException('Invalid credentials');

    const valid = await bcrypt.compare(dto.password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    return { token: this.signToken(user._id.toString(), user.email, user.role) };
  }

  async googleLogin(user: any) {
    return { token: this.signToken(user._id.toString(), user.email, user.role) };
  }
}
