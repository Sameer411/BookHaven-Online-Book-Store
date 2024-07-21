// src/app/models/book.model.ts
export interface Book {
    id: number;
    title: string;
    price: string|number;
    author: string;
    category: string;
    coverImageUrl: string;
    description: string;
  }
  