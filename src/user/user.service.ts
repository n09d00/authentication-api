import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async getUserWithUsername(username: string ): Promise<User> {
        const foundUser = await this.userModel.findOne({ username }).exec();

        if (!foundUser) {
            throw new NotFoundException(`User with Username: ${ username } not found!`);
        }
        return foundUser
    }

    async createNewUser(userdto: UserDto) {
        const newUser =  new this.userModel(userdto);
        return newUser.save();
    }

    async deleteUser(username: string) {
        this.userModel.deleteOne({ username });
    }

}