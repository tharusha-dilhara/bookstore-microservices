import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update.dto';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern('books.create')
  create(@Payload() createbookDto: CreateBookDto){
    return this.booksService.create(createbookDto);
  }

  @MessagePattern('books.findAll')
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern('books.findOne')
  findOne(@Payload() id: number) {
    return this.booksService.findOne(id);
  }

  @MessagePattern('books.update')
  update(@Payload() book: UpdateBookDto) {
    const { id, ...bookData } = book;
    return this.booksService.update(id, bookData as CreateBookDto);
  }

  @MessagePattern('books.removeBook')
  remove(@Payload() id: number) {
    return this.booksService.remove(id);
  }
}
