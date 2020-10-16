class Book {
    constructor(title, genre, author, isRead = false){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
    }  
  }
  
  class BookList {
    constructor () {
      this.books = [];
      this.lastRead = null;
      this.currentlyReading = null;
    }
  
    add = (book)=>{
      this.books.push(book);
      if (this.currentlyReading === null && this.books.length === 1) 
        this.currentlyReading = this.books[0];
    };
  
    getNumRead = ()=>{
      return this.books.reduce((a,b)=>{
        let add = b.isRead ? 1 : 0;
        return a + add;
      }, 0);
    };
  
    getNumUnread = ()=>{
      return this.books.reduce((a,b)=>{
        let add = b.isRead ? 0 : 1;
        return a + add;
      }, 0);
    };
  
    startReading = (bookTitle)=> {
      const theBook = this.books.find((book)=>{
        return book.title === bookTitle;
      });
      this.currentlyReading = theBook === undefined ? this.currentlyReading : theBook;
  
    };
  
    finishReading= (bookTitle)=> {
      const theBook = this.books.find((book)=>{
        return book.title === bookTitle;
      });
      if (theBook !== undefined) {
        this.currentlyReading = null;
        this.lastRead = theBook;
        theBook.isRead = true;
      }
  
    };
  }
  
  let book1 = new Book("I Am That", "philosophy", "Nisargaddatta Maharaj", true);
let book2 = new Book("Silence of the Heart", "philosophy", "Robert Adam", true);
let book3 = new Book("Wars and lies", "history", "Sylvain Laforest", true);
let book4 = new Book("Chronique du mondialisme", "history", "Pierre Hillard", false);
let book5 = new Book("Il n'y a que l'Un", "philosophy", "Gérald Ben-Merzoug");
const homeLibrary = new BookList();

homeLibrary.add(book1);
homeLibrary.add(book2);
homeLibrary.add(book3);
homeLibrary.add(book4);
homeLibrary.add(book5);

const book = document.querySelector(".booklist");

const updateBooklist = ()=> { 
    homeLibrary.books.forEach((aBook)=>{
        const myDiv = document.createElement("div");
        book.appendChild(myDiv);
        let bookInfo = document.createElement("h3");
        bookInfo.innerHTML = `<strong>Title: </strong>${aBook.title}`;
        myDiv.appendChild(bookInfo);
        bookInfo = document.createElement("p");
        bookInfo.innerHTML = `<strong>Genre: </strong>${aBook.genre}`;
        myDiv.appendChild(bookInfo);
        bookInfo = document.createElement("p");
        bookInfo.innerHTML = `<strong>Author: </strong>${aBook.author}`;
        myDiv.appendChild(bookInfo);
        myDiv.classList.add("book");
    });
}

const updateStartReading = ()=> {
const currentBook = document.querySelector(".currentBook span")
currentBook.innerText = homeLibrary.currentlyReading !== null ? homeLibrary.currentlyReading.title : "no book yet!";
}

const updateFinishedReading = ()=> { 
    const lastBook = document.querySelector(".lastBook span")
    var d = new Date();
    
    lastBook.innerText = homeLibrary.lastRead !== null ? `${homeLibrary.lastRead.title} on ${d.getDay()}/${d.getMonth()}/${d.getFullYear()}` : "no book yet!";
}

const startBtn = document.querySelector(".start-btn");
const startInput = document.querySelector("#startReading");
startBtn.addEventListener("click", ()=> {
    homeLibrary.startReading(startInput.value);
    updateStartReading();
    startInput.value = "";
});

const finishedBtn = document.querySelector(".finished-btn");
const finishedInput = document.querySelector("#finishedReading");
finishedBtn.addEventListener("click", ()=> {
    homeLibrary.finishReading(finishedInput.value);
    updateFinishedReading();
    updateStartReading();
    finishedInput.value = "";
});

updateBooklist();
updateStartReading();
updateFinishedReading();