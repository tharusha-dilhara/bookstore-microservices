import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BooksService {

  constructor(@Inject('BOOKS_CLIENT') private  client: ClientProxy) {}

  create(createBookDto: CreateBookDto) {
    return this.client.send('books.create', createBookDto);
  }

  findAll() {
    return this.client.send('books.findAll', {});
  }

  findOne(id: number) {
    return this.client.send('books.findOne', id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.client.send('books.update', { id, ...updateBookDto });
  }

  remove(id: number) {
    return this.client.send('books.remove', id);
  }
}
