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

book1 = new Book('JFK: Coming of Age in the American Century, 1917-1956',
    'Biograghy',
    'Fredrik Logevall',
    false);

book2 = new Book('To Sleep in a Sea of Stars',
    'Science Fiction',
    'Christopher Paolini',
    true);

book3 = new Book('Eat a Peach',
    'Business',
    'David Chang');

book4 = new Book('A Rogue of One\'s Own',
    'Romance',
    'Evie Dunmore',
    false);

book5 = new Book('When No One is Watching',
    'Mystery',
    'Alyssa Cole');

console.log(book1, book2, book3, book4, book5);

// console.log output:
Book {
    title: 'JFK: Coming of Age in the American Century, 1917-1956',
    genre: 'Biograghy',
    author: 'Fredrik Logevall',
    isRead: false
}

Book {
    title: 'To Sleep in a Sea of Stars',
    genre: 'Science Fiction',
    author: 'Christopher Paolini',
    isRead: false
}

Book {
    title: 'Eat a Peach',
    genre: 'Business',
    author: 'David Chang',
    isRead: false
}

Book {
    title: "A Rogue of One's Own",
    genre: 'Romance',
    author: 'Evie Dunmore',
    isRead: false
}

Book {
    title: 'When No One is Watching',
    genre: 'Mystery',
    author: 'Alyssa Cole',
    isRead: false
}
