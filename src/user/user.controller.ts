import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { PostDto } from './dto/post.dto';
import { UpdateDto } from './dto/update.dto';

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

    @Patch(':id')
    updateUserWithPathParam(@Param('id') userId: number, @Body() dto: UpdateDto): Promise<string> {
        return this.userService.updateUser(userId, dto);
    }

    @Patch()
    updateUserWithQueryString(@Query('userId') userId: number, @Body() dto: UpdateDto): Promise<string> {
        return this.userService.updateUser(userId, dto);
    }

}
