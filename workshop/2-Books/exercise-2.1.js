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
    constructor (title, genre, author, isRead=false){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
    }
}

let book1 = new Book("Invisible girl","Fiction","Lisa Jewell",false);
let book2 = new Book("Dune", "Science fiction","Frank Herbert", true);
let book3 = new Book("Rebecca", "Mystery", "Daphne Du Maurier");
let book4 = new Book("Solutions and other problems", "Non fiction", "Allie Brosh");
let book5 = new Book("Mordern confort food", "Cookbook", "Ina Garten", true);


console.log(book1, book2, book3, book4, book5);
