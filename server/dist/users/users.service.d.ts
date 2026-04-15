import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findByEmail(email: string): Promise<UserDocument | null>;
    findById(id: string): Promise<UserDocument | null>;
    findByGoogleId(googleId: string): Promise<UserDocument | null>;
    create(data: Partial<User>): Promise<UserDocument>;
    updateProfile(id: string, data: Partial<User>): Promise<UserDocument>;
}
