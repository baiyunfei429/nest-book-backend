import { Module } from '@nestjs/common';
import { BookService } from './book.service.js';
import { BookController } from './book.controller.js';
import { DbModule } from '../db/db.module.js';

@Module({
  imports: [
    DbModule.register({
      path: 'book.json'
    })
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
