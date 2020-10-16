// define the Book class
class Book {
  constructor(title, genre, author, coverArtURL, isRead = false) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.coverArtURL = coverArtURL;
    this.isRead = isRead;
  }
}

// define the BookList class
class BookList {
  constructor(books = [], lastRead = null, currentlyReading = null) {
    this.books = books;
    this.lastRead = lastRead;
    this.currentlyReading = currentlyReading;
  }

  // add a book
  add = (book) => {
    let index = this.books.push(book) - 1;

    if (this.currentlyReading === null) {
      this.currentlyReading = index;
    }
  };

  // get number of read books
  getNumRead = () => {
    let count = 0;

    this.books.forEach((book) => {
      if (book.isRead) {
        count++;
      }
    });

    return count;
  };

  // get number of unread books
  getNumUnread = () => {
    let count = 0;

    this.books.forEach((book) => {
      if (!book.isRead) {
        count++;
      }
    });

    return count;
  };

  // started reading
  startReading = (title) => {
    let index = this.books.findIndex((obj) => obj.title === title);

    if (index > -1) {
      this.currentlyReading = index;
    }
  };

  // finished reading
  finishReading = (title) => {
    let index = this.books.findIndex((obj) => obj.title === title);

    if (index > -1) {
      this.lastRead = index;
      this.currentlyReading = null;
    }
  };

  // get all the books
  getBooks = () => {
    return this.books;
  }
}

const homeLibrary = new BookList();

// create some books to work with
homeLibrary.add(
  new Book('The Shining', 'Horror', 'Stephen King', 'assets/the-shining.jpg'));
homeLibrary.add(
  new Book('American Gods', 'Fiction', 'Neil Gaiman', 'assets/american-gods.jpg'));
homeLibrary.add(
  new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', 'assets/eloquent-javascript.jpg', true)
);
homeLibrary.add(
  new Book('The Eire Affair', 'Fantasy', 'Jasper Fforde','assets/the-eire-affair.jpg'));
homeLibrary.add(
  new Book('The Revisionists', 'Science-fiction', 'thomas Mullen', 'assets/the-revisionists.jpg')
);

const main = document.querySelector('.main');

// populate the grid with cover art and book details
homeLibrary.getBooks().forEach(book => {
  const cover = document.createElement('div');
  const detail = document.createElement('div');
  cover.className = 'cover';
  detail.className = 'detail';
  cover.innerHTML = '<img src="' + book.coverArtURL + '">';
  detail.innerHTML = '<h2>' + book.title + '</h2>' +
    '<p>By: ' + book.author + '</p>' +
    '<p>Genre: ' + book.genre + '</p>';
  main.appendChild(cover);
  main.appendChild(detail);
});
