import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { DbModule } from './db/db.module.js';
import { BookModule } from './book/book.module.js';

@Module({
  imports: [UserModule, DbModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
