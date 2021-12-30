import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/list')
    getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }
}
