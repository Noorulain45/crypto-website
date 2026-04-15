import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<any>;
    updateProfile(req: any, body: {
        name?: string;
        avatar?: string;
    }): Promise<import("./user.schema").UserDocument>;
}
