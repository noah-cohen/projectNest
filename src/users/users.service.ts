import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        { id: 1, name: 'noah', email: 'n548548106@gmail.com', phone: '0548548106' },
        { id: 2, name: 'miri', email: 'm0556773878@gmail.com', phone: '0556773878' },
    ];
    private currentId = 1;

    // יצירה
    createUser(name: string, email: string, phone: string): User {
        const newUser: User = {
            id: this.currentId++,
            name,
            email,
            phone,
        };
        this.users.push(newUser);
        return newUser;
    }
    // עדכון
    updateUserById(id: number, newName: string, newEmail: string, newPhone: string): User {
        const user = this.findUserById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        user.name = newName;
        user.email = newEmail;
        user.phone = newPhone;
        return user;
    }

    // מחיקה
    deleteUserById(id: number): void {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new NotFoundException('User not found');
        }
        this.users.splice(index, 1);
    }
    // קבלה לפי ID
    getUserById(id: number): User {
        const user = this.findUserById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    private findUserById(id: number): User {
        return this.users.find(user => user.id === id);
    }
}
