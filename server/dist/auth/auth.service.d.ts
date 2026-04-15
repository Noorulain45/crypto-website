import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SignupDto, LoginDto } from './dto/auth.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    private signToken;
    signup(dto: SignupDto): Promise<{
        token: string;
    }>;
    login(dto: LoginDto): Promise<{
        token: string;
    }>;
    googleLogin(user: any): Promise<{
        token: string;
    }>;
}
