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
    constructor(title, genre, author, isRead) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead || false;
    }
}

let book1 = new Book("1984", "Political Fiction", "George Orwell", true);
let book2 = new Book("The Sun Also Rises", "Fiction", "Ernest Hemingway", true);
let book3 = new Book("Kitchen Confidential", "Memoir", "Anthony Bourdain", false);
let book4 = new Book("2001: a Space Odyssey", "Science Fiction", "Arthur C. Clarke", false);
let book5 = new Book("Becoming", "Memoir", "Michelle Obama", true)

console.log(book1, book2, book3, book4, book5);
