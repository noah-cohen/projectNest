import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [UsersModule], // ייבוא את ה-UsersModule כדי להשתמש בקונטרולר שלו
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
