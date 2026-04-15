import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email });
  }

  async findById(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id);
  }

  async findByGoogleId(googleId: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ googleId });
  }

  async create(data: Partial<User>): Promise<UserDocument> {
    return this.userModel.create(data);
  }

  async updateProfile(id: string, data: Partial<User>): Promise<UserDocument> {
    const user = await this.userModel.findByIdAndUpdate(id, data, { new: true });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
