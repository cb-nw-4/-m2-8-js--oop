// Create the form in html : 3 inputs of text then 1 that says Yes or No have you read it.
// Also need a spot below it where after the submit event happens the new book and its info are pushed there.
// You need to query select the value of each input then push them into a new Book object which will be shown
// success?

class Book {
  constructor(title, genre, author, isRead = false) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
  }
}

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
      return book.title === bookTitle;
    });
    if (foundBook) {
      this.currentlyReading = bookTitle;
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

const bookList = new BookList();
const library = document.querySelector(".library");
const books = document.querySelector(".books");
const submit = document.querySelector(".submit-btn");
const author = document.querySelector("#book-author");
const title = document.querySelector("#book-name");
const genre = document.querySelector("#genre");
// const bookUrl = document.querySelector('#book-url')


function newBookSubmit(event) {
  event.preventDefault();
  const book = new Book(title.value, author.value, genre.value);
  console.log(book)
  // let newBookPara = document.createElement("p");
  const newDiv = document.createElement('div')
  newDiv.innerHTML = `<div>Title: ${book.title}</div><div>Genre: ${book.genre}</div><div>Author: ${book.author}</div>`
  books.appendChild(newDiv)
  // books.innerHTML = `<div>Title:${book.genre}</div>`
  // books.innerHTML = `<div>Title:${book.author}</div>`
  // newBookPara.innerText = `Title:${book.title}-Genre:${book.genre}-Author:${book.author}`;
  // books.appendChild(newBookPara);
}

submit.addEventListener("click", newBookSubmit);
