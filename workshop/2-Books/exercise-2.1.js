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
    constructor(title, genre, author, isRead = false) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
    }
}

let book1 = new Book('Pride and Prejudice', 'romantic novel', 'Jane Austin', true);
let book2 = new Book ("Harry Potter and the Sorcerer's Stone", 'fantasy fiction', 'J. K. Rowling', false);
let book3 = new Book ('The Alchemist', 'adventure fiction', 'Paulo Coelho', true);
let book4 = new Book ('The Thin Man', 'detective novel', 'Dashiell Hammett');
let book5 = new Book ('The Fault in Our Stars', 'young adult fiction', 'John Green', true);


console.log(book1, book2, book3, book4, book5);
