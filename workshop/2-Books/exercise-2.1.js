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
    constructor(title, genre, author, isRead = false){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
    }
}

let book1 = new Book("I Am That", "philosophy", "Nisargaddatta Maharaj", true);
let book2 = new Book("Silence of the Heart", "philosophy", "Robert Adam", true);
let book3 = new Book("Wars and lies", "history", "Sylvain Laforest", true);
let book4 = new Book("Chronique du mondialisme", "history", "Pierre Hillard", false);
let book5 = new Book("Il n'y a que l'Un", "philosophy", "Gérald Ben-Merzoug");

console.log(book1, book2, book3, book4, book5);
/*Book {
    title: 'I Am That',
    genre: 'philosophy',
    author: 'Nisargaddatta Maharaj',
    isRead: true
  } Book {
    title: 'Silence of the Heart',
    genre: 'philosophy',
    author: 'Robert Adam',
    isRead: true
  } Book {
    title: 'Wars and lies',
    genre: 'history',
    author: 'Sylvain Laforest',
    isRead: true
  } Book {
    title: 'Chronique du mondialisme',
    genre: 'history',
    author: 'Pierre Hillard',
    isRead: false
  } Book {
    title: "Il n'y a que l'Un",
    genre: 'philosophy',
    author: 'Gérald Ben-Merzoug',
    isRead: false
  }*/