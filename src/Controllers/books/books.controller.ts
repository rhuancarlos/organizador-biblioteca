import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
  
  @Get()
  getAllBooks(): string{
    return 'Todos o livros registrados';
  }
 
}
