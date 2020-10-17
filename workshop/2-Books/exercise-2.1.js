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


let book1 = new Book('title1', 'genre1', 'author1', true);
let book2 = new Book('title2', 'genre2', 'author2', false);
let book3 = new Book('title3', 'genre3', 'author3');
let book4 = new Book('title4', 'genre4', 'author4', true);
let book5 = new Book('title5', 'genre5', 'author5', false);

console.log(book1, book2, book3, book4, book5);