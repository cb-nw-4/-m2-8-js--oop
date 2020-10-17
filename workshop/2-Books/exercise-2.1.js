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
    constructor(title, genre, author, isRead){
        this.title = title;
        this.genre = genre;
        this.author = author;
        if (isRead === undefined){
            this.isRead = false
        }else{
        this.isRead = isRead;
        }
        }
    }
    

let book1 = new Book("theok", "suspense", "Bharat",true);
let book2 = new Book("The Adventure", "triller", "Brad",);
let book3 = new Book("Guy meets girl", "romance", "Tom");
let book4 = new Book("Opps", "comedy", "Harry");
let book5 = new Book("WHat Happend", "suspense", "Jim");


// let book2 = new Book();


console.log(book1, book2, book3, book4, book5);
