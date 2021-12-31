import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostDto } from './dto/post.dto';
import { UpdateDto } from './dto/update.dto';

import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
      ) {}
    
    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async postUser(dto: PostDto): Promise<string> {

        const user: User = new User();

        user.userId = dto.userId;
        user.password = dto.password;
        user.name = dto.name;
        user.phone = dto.phone;
        user.email = dto.email;

        await this.userRepository.save(user);
        return "success post";
    }

    async updateUser(userId: number, dto: UpdateDto): Promise<string> {

        const user: User = await this.userRepository.findOne(userId);

        user.name = dto.name;
        user.phone = dto.phone;
        user.email = dto.email;

        await this.userRepository.save(user);
        return "success update";
    }
}
