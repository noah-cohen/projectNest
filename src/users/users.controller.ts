import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    createUser(@Body('name') name: string, @Body('email') email: string, @Body('phone') phone: string): User {
        return this.usersService.createUser(name, email, phone);
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body('name') name: string, @Body('email') email: string, @Body('phone') phone: string): User {
        return this.usersService.updateUserById(+id, name, email, phone);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string): void {
        this.usersService.deleteUserById(+id);
    }

    @Get(':id')
    getUserById(@Param('id') id: string): User {
        return this.usersService.getUserById(+id);
    }
}
