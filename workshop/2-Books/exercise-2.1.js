// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
    constructor (title, genre, author, isRead) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        if (isRead === undefined) this.isRead = false;
        else if (isRead === true) {
        this.isRead = true;
        }
    }
  }

let book1 = new Book("Terminator 1", "Fantasy", "Cynthia", true);
let book2 = new Book("Terminator 2", "Sci-Fi", "Joe", false);
let book3 = new Book("Terminator 3", "Fiction", "Joe");
let book4 = new Book("Terminator 4", "Non-Fiction", "Joe", true);
let book5 = new Book("Terminator 5", "Comedy", "Joe", false);


console.log(book1, book2, book3, book4, book5);
