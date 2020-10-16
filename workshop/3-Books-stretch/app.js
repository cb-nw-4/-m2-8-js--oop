class Book {
    constructor(title, genre, author, isRead = false, imgLink = null){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
        this.imgLink = imgLink
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
  
  let book1 = new Book("I Am That", "philosophy", "Nisargaddatta Maharaj", true, "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQOrqr94UR8CdrsZ4axKS48sysAnMJnj5qleQwvGAXx4KUS9wnL");
let book2 = new Book("Silence of the Heart", "philosophy", "Robert Adam", true, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoF-vc2qL866Bv_jaD9Gr0Z5WU8ymigcY0gaAXsusIINZ3M9K");
let book3 = new Book("Wars and lies", "history", "Sylvain Laforest", true, "https://editionscharlou.com/wp-content/uploads/2020/05/1588869495-e1590707611139.png");
let book4 = new Book("Chroniques du mondialisme", "history", "Pierre Hillard", false, "https://images-na.ssl-images-amazon.com/images/I/41kqgjEim0L._SX316_BO1,204,203,200_.jpg");
let book5 = new Book("Il n'y a que l'Un", "philosophy", "Gérald Ben-Merzoug", false, "https://www.renaud-bray.com/ImagesEditeurs/PG/2779/2779827-gf.jpg");
const homeLibrary = new BookList();

homeLibrary.add(book1);
homeLibrary.add(book2);
homeLibrary.add(book3);
homeLibrary.add(book4);
homeLibrary.add(book5);

const book = document.querySelector(".booklist");

const createBookDiv = (newBook)=>{
  const myDiv = document.createElement("div");
  book.appendChild(myDiv);
  let bookInfo = document.createElement("img");
  bookInfo.src = newBook.imgLink || "assets/default_book_cover_2015.jpg";
  myDiv.appendChild(bookInfo);

  bookInfo = document.createElement("h3");
  bookInfo.innerHTML = newBook.title;
  myDiv.appendChild(bookInfo);

  bookInfo = document.createElement("p");
  bookInfo.innerHTML = `<strong>Genre: </strong>${newBook.genre}`;
  myDiv.appendChild(bookInfo);

  bookInfo = document.createElement("p");
  bookInfo.innerHTML = `<strong>Author: </strong>${newBook.author}`;
  myDiv.appendChild(bookInfo);
  myDiv.classList.add("book");

  bookInfo = document.createElement("p");
  const isRead = newBook.isRead ? "yes" : "no";
  bookInfo.innerHTML = `<strong>Already read: </strong>${isRead}`;
  bookInfo.classList.add("isReadTexInfo");
  myDiv.appendChild(bookInfo);

  myDiv.classList.add("book"); 
};

const formatDate = (num)=>{
  let newNum = "0" + num;
  return newNum.slice(-2);
};

const initializeBooklist = ()=> { 
    homeLibrary.books.forEach((aBook)=>{
      createBookDiv(aBook);      
    });
};

const updateBookList = ()=> {
  let aBook = homeLibrary.books[homeLibrary.books.length -1];
  createBookDiv(aBook);
};

const updateFinishedReading = ()=> { 
  const lastBook = document.querySelector(".lastBook span")
  var d = new Date();     
  lastBook.innerText = homeLibrary.lastRead !== null ? `${homeLibrary.lastRead.title} on ${formatDate(d.getDate())}.${formatDate(d.getMonth() + 1)}.${d.getFullYear()}` : "no book yet!";
};

const updateIsReadSatus = ()=> {
  const bookTemplate = document.querySelectorAll(".isReadTexInfo");
  bookTemplate.forEach((aBook, i)=>{    
    const isRead = homeLibrary.books[i].isRead ? "yes" : "no";
    aBook.innerHTML = `<strong>Already read: </strong>${isRead}`;
  }); 
}

const updateStartReading = ()=> {
const currentBook = document.querySelector(".currentBook span")
currentBook.innerText = homeLibrary.currentlyReading !== null ? homeLibrary.currentlyReading.title : "no book yet!";
};

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
    updateIsReadSatus();
    finishedInput.value = "";
});

const form = document.querySelector("form");
form.addEventListener("submit", (event)=> {
  event.preventDefault();
  const newBookTitle = document.getElementById("title");
  const newBookGenre = document.getElementById("genre");
  const newBookAuthor = document.getElementById("author");
  const newBookIsRead = document.getElementById("isRead"); 
  const newBookImgUrl = document.getElementById("imgUrl");
  
  homeLibrary.add(new Book(newBookTitle.value, newBookGenre.value, newBookAuthor.value, newBookIsRead.checked, newBookImgUrl.value));  
  updateBookList(); 
  form.reset();   
});


initializeBooklist();
updateStartReading();
updateFinishedReading();