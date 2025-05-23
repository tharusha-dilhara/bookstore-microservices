import { Injectable } from '@nestjs/common';
import { bookDto } from './dto/book.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private books: bookDto[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      rating: 4.5
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      rating: 4.8
    },
  ]

  create(createbookDto: CreateBookDto) {
    const newBook: bookDto = {
      ...createbookDto,
      id: this.books.length + 1
    }

    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }


  findOne(id: number) {
    return this.books.find((book) => book.id === id);
  }

  update(id: number, book: CreateBookDto) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books[index] = { ...this.books[index], ...book };
      return this.books[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      const removedBook = this.books[index];
      this.books.splice(index, 1);
      return removedBook;
    }
    return null;
  }

}
