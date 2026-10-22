import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserController } from './user.controller.js';
import { DbModule } from '../db/db.module.js';

@Module({
  imports: [
    DbModule.register({
      path: 'users.json',
    })
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
