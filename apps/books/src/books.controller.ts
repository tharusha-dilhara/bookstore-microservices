import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BOOKS_PATTERNs } from '@app/constracts/books/books.patterns';
import { CreateBookDto } from '@app/constracts/books/create-book.dto';
import { UpdateBookDto } from '@app/constracts/books/update.dto';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern(BOOKS_PATTERNs.CREATE)
  create(@Payload() createbookDto: CreateBookDto){
    return this.booksService.create(createbookDto);
  }

  @MessagePattern(BOOKS_PATTERNs.FIND_ALL)
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern(BOOKS_PATTERNs.FIND_ONE)
  findOne(@Payload() id: number) {
    return this.booksService.findOne(id);
  }

  @MessagePattern(BOOKS_PATTERNs.UPDATE)
  update(@Payload() book: UpdateBookDto) {
    const { id, ...bookData } = book;
    return this.booksService.update(id, bookData as CreateBookDto);
  }

  @MessagePattern(BOOKS_PATTERNs.DELETE)
  remove(@Payload() id: number) {
    return this.booksService.remove(id);
  }
}
