import { AuthService } from './auth.service';
import { SignupDto, LoginDto } from './dto/auth.dto';
import { ConfigService } from '@nestjs/config';
export declare class AuthController {
    private authService;
    private config;
    constructor(authService: AuthService, config: ConfigService);
    signup(dto: SignupDto): Promise<{
        token: string;
    }>;
    login(dto: LoginDto): Promise<{
        token: string;
    }>;
    googleAuth(): void;
    googleCallback(req: any, res: any): Promise<void>;
}
