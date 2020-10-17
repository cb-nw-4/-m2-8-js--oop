// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2.
// Paste them right here:
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

class BookList {
  // Code here
  
  
  constructor(){
  this.books = [];
  this.lastRead = null;
  this.currentlyReading = null;

  }
  add = (book) =>{
    this.books.push(book)
    this.currentlyReading = book;

  }
  getNumRead = () =>{
    let i = 0;

    this.books.forEach(function(book){
      if(book.isRead === true){
        i += 1
      }
    })
return i

  }
  getNumUnread = () =>{

    let i = 0;
    this.books.forEach(function(book){
      if(book.isRead === false){
        i += 1
      }
    })
return i
    
  }
}


// Exercise 2.3
//
// We want to be able to add books to our BookList, so that we can start a
// collection!
//
// Let's create an `add` method in our BookList class. It should take a book - done 
// as a parameter. When we call `.add`, it should push that new book into the - done 
// `books` array on the `BookList` class. Also, if no Book is being currently read - done 
// we should set currentlyReading to point to this newly added Book. - dpne 
//
// Books have an `isRead` property, to indicate if we've read it or not.
// Let's also add two new methods:
// - getNumRead
// - getNumUnread
//
// These methods should return the number of books which are read and unread,
// respectively.
//
// The following code will fail by default. Your goal is to get it to run, and output the values specified at the end:

const homeLibrary = new BookList();

// Books are unread by default:
homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));

// But, we can specify that we've read it:
homeLibrary.add(
  new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true)
);


// At this point, we should have 2 unread books, and 1 read book:
console.log(homeLibrary.getNumUnread()); // 2
console.log(homeLibrary.getNumRead()); // 1
// console.log(homeLibrary)
