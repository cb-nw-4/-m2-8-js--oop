let form = document.querySelector("form");
form.addEventListener("submit", SubmitFunc);
let clrbtn = document.querySelector(".clear");
clrbtn.addEventListener("click", ClearFunc);
let i=0;


class Book {
    constructor (title, genre, author, isRead) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        if (isRead === undefined) this.isRead = false;
        else if (isRead === true) {
        this.isRead = true;
        }
    }
  }
  class BookList {
    constructor () {
        this.books = []
        this.lastRead = null;
        this.currentlyReading = null;
    }
    add = (book) => {
        this.books.push(book);
        this.currentlyReading = book;
        displayBook(i);
        i++;

    }
    getNumRead = () => {
        let n=0;
        this.books.forEach(book => {if (book.isRead === true) n++;})
        return n;
    }
    getNumUnread = () => {
        let n=0;
        this.books.forEach(book => {if (book.isRead === false) n++;})
        return n;
    }
    startReading = (book) => {
        this.currentlyReading = book;
    }
    finishReading = (book) => {
      this.lastRead = book;
      this.currentlyReading = null;
  }
  }

const homeLibrary = new BookList();
homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));
homeLibrary.add(new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true));
homeLibrary.add(new Book('The Eire Affair', 'Fantasy', 'Jasper Fforde'));
homeLibrary.add(new Book('The Revisionists', 'Science-fiction', 'thomas Mullen'));

function displayBook() {
        console.log("Display BOok!")
        let newEntry = document.createElement("li");
        newEntry.setAttribute("class", "Entry"+(i));
        document.querySelector(".collection").appendChild(newEntry);
        let title = document.createElement("h2");
        title.innerHTML = `${homeLibrary.books[i].title}`;
        document.querySelector(".Entry"+(i)).appendChild(title);
        let genre = document.createElement("p");
        genre.innerHTML = `Genre: ${homeLibrary.books[i].genre}`;
        document.querySelector(".Entry"+(i)).appendChild(genre);
        let author = document.createElement("p");
        author.innerHTML = `Author: ${homeLibrary.books[i].author}`;
        document.querySelector(".Entry"+(i)).appendChild(author);
        let isRead = document.createElement("p");
        if (homeLibrary.books[i].isRead === true) isRead.innerHTML = `Read: Finished Reading`;
        else isRead.innerHTML = `Read: Not finished`;    
        document.querySelector(".Entry"+(i)).appendChild(isRead);
}

function SubmitFunc (event) {
    event.preventDefault();
    let check = false;
    let title = document.querySelector(".title");
    let genre = document.querySelector(".genre");
    let author = document.querySelector(".author");
    let checkBox = document.querySelector(".finReadbox"); 
    if (checkBox.checked) check = true;
    homeLibrary.add(new Book(`${title.value}`, `${genre.value}`, `${author.value}`, check));
 }
 function ClearFunc () {
    let title = document.querySelector(".title");
    let genre = document.querySelector(".genre");
    let author = document.querySelector(".author");
    let checkBox = document.querySelector(".finReadbox"); 
    title.value = "";
    genre.value = "";
    author.value ="";
    checkBox.checked = false;    
 }
