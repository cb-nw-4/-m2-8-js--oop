// From 2.3
// Copy over all of the code from 2.3...

class Book {
  constructor(title, genre, author, isRead = false) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
  }
}

book1 = new Book("Harry Potter 1", "Fantasy", "J.K. Rowling", true);
book2 = new Book("Harry Potter 1", "Fantasy", "J.K. Rowling", true);
book3 = new Book("Harry Potter 1", "Fantasy", "J.K. Rowling", false);
book4 = new Book("Harry Potter 1", "Fantasy", "J.K. Rowling", false);
book5 = new Book("Harry Potter 1", "Fantasy", "J.K. Rowling", false);

class BookList {
  // Code here
  constructor() {
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }
  add = (book) => {
    this.books = this.books.concat(book);
    if (this.currentlyReading === null) {
      this.currentlyReading = book;
    } else {
      this.currentlyReading;
    }
  };

  getNumRead = () => {
    let count = 0;
    this.books.forEach((book) => {
      if (book.isRead === true) {
        count = count + 1;
      }
    });
    return count;
  };

  getNumUnread = () => {
    let count = 0;
    this.books.forEach((book) => {
      if (book.isRead === false) {
        count = count + 1;
      }
    });
    return count;
  };

  startReading = (bookTitle) => {
    const foundBook = this.books.find((book) => {
      return book.title === bookTitle
    }) 
    if (foundBook){
      this.currentlyReading = bookTitle
    }
  };

  finishReading = (bookTitle) => {
    const found = this.books.find((book) => {
      return book.title === bookTitle;
    });
    if (found) {
      this.currentlyReading = null;
      this.lastRead = bookTitle;
    }
  };
}

// Exercise 2.4
/*

In our BookList, we have properties to track:
- The last book we've read
- The book we're currently reading
- The next book up

We're not using these properties yet; they're always null.

Our new task is to make them functional. When we add our first book to the
list, `currentlyReading` should get set to it.

We need two new methods:

- startReading
- finishReading

Both of these methods will take a book title, as a string.

When we start reading a book, we should set the `currentlyReading` property
to point to it.

When we finish reading a book, we should set `currentlyReading` back to `null`,
and set `lastRead` to the book we just finished.

Your goal is to add the methods and behaviour necessary so that the following
code runs well and produces the expected output.
*/

const homeLibrary = new BookList();

homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
homeLibrary.add(new Book("American Gods", "Fiction", "Neil Gaiman"));
homeLibrary.add(
  new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke", true)
);
homeLibrary.add(new Book("The Eire Affair", "Fantasy", "Jasper Fforde"));
homeLibrary.add(
  new Book("The Revisionists", "Science-fiction", "thomas Mullen")
);

console.log("initial state", homeLibrary.currentlyReading); // should be The Shining book object
console.log("initial last-read", homeLibrary.lastRead); // should be null

homeLibrary.finishReading("The Shining");
console.log(
  "Currently reading, after finishing The Shining",
  homeLibrary.currentlyReading
); // should be null
console.log("Last-read, after finishing The Shining", homeLibrary.lastRead); // should be The Shining
homeLibrary.startReading("The Revisionists");
console.log(
  "Currentky reading, After starting The Revisionists",
  homeLibrary.currentlyReading
); // should be The Revisionists book
