let bookshelf = document.querySelector('.bookshelf'); 
let currentlyReading = document.querySelector('.currentlyReading');
let submitButton = document.querySelector('.submitButton');
let bookTitle = document.querySelector('.bookTitle');
let bookGenre = document.querySelector('.bookGenre');
let bookAuthor = document.querySelector('.bookAuthor');

class Book {
    constructor (title,genre,author,isRead=false) { 
        this.title =title; 
        this.genre= genre;
        this.author=author; 
        this.isRead= isRead; 
    } 
};

class BookList {
    constructor () { 
    this.books = []; 
    this.lastRead = null;
    this.currentlyReading = null; 
    }
    add = (book) => { 
    this.books.push(book);
    if (this.currentlyReading===null) { 
        this.currentlyReading = book.title; 
    }; 
    }; 
    getNumRead = () => { 
    let numRead = 0; 
    this.books.forEach((element)=> { 
        if(element.isRead === true) { 
        numRead +=1; 
        }
    });
    return numRead; 
    };
    getNumUnread = () => { 
    let numUnread = 0; 
    this.books.forEach((element)=> { 
        if(element.isRead === false) { 
        numUnread +=1; 
        }
    });
    return numUnread; 
    };
    startReading = (bookTitle) => { 
    this.currentlyReading = bookTitle;
    }; 
    finishReading = (bookTitle) => { 
    this.currentlyReading = null; 
    this.lastRead=bookTitle;
    }; 
}; 

let homeLibrary = new BookList();

homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));
homeLibrary.add(new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true));
homeLibrary.add(new Book('The Eire Affair', 'Fantasy', 'Jasper Fforde'));
homeLibrary.add(new Book('The Revisionists', 'Science-fiction', 'thomas Mullen'));

homeLibrary.finishReading('The Shining');
homeLibrary.startReading('The Revisionists');

let bookColors = ["grey","blue","red","green","yellow","purple","pink","beige","burlywood","darkblue","darkkhaki","darkolivegreen"];

let left=0;

homeLibrary.books.forEach((element,i)=> { 
    let name = "book"+i; 
    let book = document.createElement('div'); 
    book.innerText=element["title"];
    book.style.fontSize = "35px";
    bookshelf.appendChild(book); 
    bookshelf.style.position="relative";
    book.setAttribute("class",name); 
    book.style.width="20vh"; 
    book.style.height = "60vh"; 
    book.style.backgroundColor= bookColors[Math.round(Math.random()*(bookColors.length-1))]; 
    book.style.position="absolute";
    book.style.bottom="0px";  
    book.style.left=left+"vh";
    book.style.border="1px solid grey"
    left += 20; 
});

currentlyReading.innerText="Currently Reading: " + homeLibrary.currentlyReading;

let newBookTitle;
let newBookGenre;
let newBookAuthor;

submitButton.addEventListener('click', function() {
    newBookTitle= bookTitle.value; 
    newBookGenre = bookGenre.value;
    newBookAuthor = bookAuthor.value; 
    homeLibrary.add(new Book(newBookTitle, newBookGenre, newBookAuthor));
    let newbook = document.createElement('div'); 
    newbook.innerText=bookTitle.value;
    newbook.style.fontSize = "35px";
    bookshelf.appendChild(newbook); 
    newbook.setAttribute("class","newbook"); 
    newbook.style.width="20vh"; 
    newbook.style.height = "60vh"; 
    newbook.style.backgroundColor= bookColors[Math.round(Math.random()*(bookColors.length-1))]; 
    newbook.style.position="absolute";
    newbook.style.bottom="0px";  
    newbook.style.left=left+"vh";
    newbook.style.border="1px solid grey"
    left += 20; 
});

console.log(newBookTitle, newBookGenre, newBookAuthor);

console.log(homeLibrary);

