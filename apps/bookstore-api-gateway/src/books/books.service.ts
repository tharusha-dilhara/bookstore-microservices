import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';
import { BOOKS_PATTERNs } from '@app/constracts/books/books.patterns';

@Injectable()
export class BooksService {

  constructor(@Inject('BOOKS_CLIENT') private  client: ClientProxy) {}

  create(createBookDto: CreateBookDto) {
    return this.client.send(BOOKS_PATTERNs.CREATE, createBookDto);
  }

  findAll() {
    return this.client.send(BOOKS_PATTERNs.FIND_ALL, {});
  }

  findOne(id: number) {
    return this.client.send(BOOKS_PATTERNs.FIND_ONE, id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.client.send(BOOKS_PATTERNs.UPDATE, { id, ...updateBookDto });
  }

  remove(id: number) {
    return this.client.send(BOOKS_PATTERNs.DELETE, id);
  }
}
