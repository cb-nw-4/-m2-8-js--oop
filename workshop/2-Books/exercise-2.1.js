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
    };
}

book1 = new Book("The Hound of the Baskervilles", "Mystery", "Sir Arthur Conan Doyle", false);

book2 = new Book("The Master and Margarita", "Satire", "Mikhaul Bulgakov", true);

book3 = new Book("Jurassic Park", "Adventure", "Michael Crichton", true);

book4 = new Book("The Cat In The Hat", "Childrens", "Dr. Seuss", false);

book5 = new Book("Neuromancer", "Science fiction", "Willim Gibson");


console.log(book1, book2, book3, book4, book5);
