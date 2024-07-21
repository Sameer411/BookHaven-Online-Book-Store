// src/app/book-list/book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { SearchService } from '../search.service';
import { BookCardComponent } from "../book-card/book-card.component";
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookCardComponent, CommonModule, FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BookListComponent implements OnInit {
  books: Book[] = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Fiction',
      coverImageUrl: 'https://m.media-amazon.com/images/I/91SpClgnqDL._AC_UF1000,1000_QL80_.jpg',
      description: 'A novel set in the American South during the 1930s, focusing on the Finch family and the moral growth of the narrator, Scout Finch, as she navigates issues of race, class, and justice.',
      price: 123
    },
    {
      id: 2,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      coverImageUrl: 'https://m.media-amazon.com/images/I/41XMaCHkrgL.jpg',
      description: 'A tragic love story set in the Jazz Age, it explores themes of decadence, idealism, resistance to change, social upheaval, and excess through the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan.',
      price: 456
    },
    {
      id: 3,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      category: 'Fiction',
      coverImageUrl: 'https://images.squarespace-cdn.com/content/v1/5d253c231b7b3d000152f204/1636959802830-AW7JAWUJGCXXUYVIZC3J/Pride_and_Prejudice_Cover-Amazon-Front__77495.1569338564.386.513.jpg',
      description: 'A romantic novel that delves into issues of marriage, money, and social status through the story of Elizabeth Bennet and her developing relationship with the wealthy but aloof Mr. Darcy.',
      price: 789
    },
    {
      id: 4,
      title: '1984',
      author: 'George Orwell',
      category: 'Fiction',
      coverImageUrl: 'https://m.media-amazon.com/images/I/81+8cdyQiML._AC_UF1000,1000_QL80_.jpg',
      description: 'A dystopian novel set in a totalitarian society under constant surveillance, exploring themes of government oppression, truth, and individuality through the experiences of protagonist Winston Smith.',
      price: 134
    },
    {
      id: 5,
      title: 'The Girl with the Dragon Tattoo',
      author: 'Stieg Larsson',
      category: 'Mystery',
      coverImageUrl: 'https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_.jpg',
      description: 'A thrilling mystery involving a journalist, Mikael Blomkvist, and a brilliant hacker, Lisbeth Salander, as they investigate the disappearance of a wealthy industrialist’s niece 40 years earlier.',
      price: 245
    },
    {
      id: 6,
      title: 'Gone Girl',
      author: 'Gillian Flynn',
      category: 'Mystery',
      coverImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQx9i-VqL1w0_AYfSzt06q-U4YVQwuA4E9g&s',
      description: 'A psychological thriller about the disappearance of Amy Dunne and the unraveling of her marriage to Nick Dunne, revealing dark secrets and unexpected twists.',
      price: 356
    },
    {
      id: 7,
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      category: 'Mystery',
      coverImageUrl: 'https://m.media-amazon.com/images/I/71y4X5150dL._AC_UF1000,1000_QL80_.jpg',
      description: 'A fast-paced thriller that follows symbologist Robert Langdon and cryptologist Sophie Neveu as they unravel clues related to a secret society and a conspiracy involving the Catholic Church.',
      price: 467
    },
    {
      id: 8,
      title: 'Big Little Lies',
      author: 'Liane Moriarty',
      category: 'Mystery',
      coverImageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1559835163i/33516773.jpg',
      description: 'A gripping tale of three women in a seaside town whose seemingly perfect lives unravel to the point of murder, exposing secrets and lies among the community.',
      price: 578
    },
    {
      id: 9,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      coverImageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg',
      description: 'A science fiction epic set on the desert planet Arrakis, following the story of Paul Atreides as he navigates political intrigue, ecological challenges, and a destiny that could change the universe.',
      price: 689
    },
    {
      id: 10,
      title: 'Neuromancer',
      author: 'William Gibson',
      category: 'Science Fiction',
      coverImageUrl: 'https://m.media-amazon.com/images/I/31oE-7+xHXL._AC_UF1000,1000_QL80_.jpg',
      description: 'A cyberpunk classic that follows Case, a washed-up computer hacker, as he is hired for a final job that takes him into the depths of cyberspace and beyond.',
      price: 790
    },
    {
      id: 11,
      title: 'The Left Hand of Darkness',
      author: 'Ursula K. Le Guin',
      category: 'Science Fiction',
      coverImageUrl: 'https://m.media-amazon.com/images/I/71XqE4caMNL._AC_UF1000,1000_QL80_.jpg',
      description: 'A groundbreaking novel that explores themes of gender and sexuality through the story of an ambassador, Genly Ai, who is sent to the planet Gethen, where inhabitants can change their gender.',
      price: 356
    },
    {
      id: 12,
      title: 'Snow Crash',
      author: 'Neal Stephenson',
      category: 'Science Fiction',
      coverImageUrl: 'https://m.media-amazon.com/images/I/81p4Y+0HzbL._AC_UF1000,1000_QL80_.jpg',
      description: 'A fast-paced adventure set in a futuristic world where a computer virus can infect humans, following the story of a hacker and pizza delivery driver named Hiro Protagonist as he unravels a conspiracy.',
      price: 467
    }
  ];
  filteredBooks: Book[] = this.books;
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.currentSearchTerm.subscribe(term => {
      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(term.toLowerCase()) ||
        book.author.toLowerCase().includes(term.toLowerCase())
      );
    });
  }

  getBooksByCategory(category: string): Book[] {
    return this.filteredBooks.filter(book => book.category === category);
  }
}

