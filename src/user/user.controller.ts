import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { PostDto } from './dto/post.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('list')
    getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @Post()
    postUser(@Body() dto: PostDto): Promise<string> {
        return this.userService.postUser(dto);
    }
}
