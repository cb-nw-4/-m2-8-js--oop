// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//

class Book {
    constructor(title, author, genre, isRead = false) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isRead = isRead;
    }
}
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

let book1 = new Book("Tales of Beedle the Bard", "Unknown", "Fiction", true);
let book2 = new Book("Fantastic Beasts & Where to Find Them", "Newt Scamander", "Non-Fiction", true);
let book3 = new Book("Quidditch Through the Ages", "Kennilworthy Whisp", "Non-Fiction", false);
let book4 = new Book("Hogwarts: A History", "Bathilda Bagshot", "Non-Fiction", true);
let book5 = new Book("Advanced Potion-Making", "Libatius Borage", "Non-Fiction");

console.log(book1, book2, book3, book4, book5);
/*
Book {
  title: 'Tales of Beedle the Bard',
  author: 'Unknown',
  genre: 'Fiction',
  isRead: true
} Book {
  title: 'Fantastic Beasts & Where to Find Them',
  author: 'Newt Scamander',
  genre: 'Non-Fiction',
  isRead: true
} Book {
  title: 'Quidditch Through the Ages',
  author: 'Kennilworthy Whisp',
  genre: 'Non-Fiction',
  isRead: false
} Book {
  title: 'Hogwarts: A History',
  author: 'Bathilda Bagshot',
  genre: 'Non-Fiction',
  isRead: true
} Book {
  title: 'Advanced Potion-Making',
  author: 'Libatius Borage',
  genre: 'Non-Fiction',
  isRead: false
}*/