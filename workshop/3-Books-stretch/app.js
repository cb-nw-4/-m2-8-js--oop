class Book {
    constructor(title, genre, author, isRead = false) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
    }
}

class BookList extends Book {

    constructor(title, genre, author, isRead, books, lastRead, currentlyReading) {
        super(title, genre, author, isRead);
        this.books = [];
        this.lastRead = null;
        this.currentlyReading = null;
    }

    add = (book) => {

        this.books.push(book);

        if (this.currentlyReading === null) {
            return this.currentlyReading = book;
        };
    }

    remove = (book) => {

    }
}


let form = document.getElementById('bookForm')


form.addEventListener('submit', AddBook);

const homeLibrary = new BookList();
let addButton = document.getElementById('submit');
let titleInput = document.getElementById('title');
let genreInput = document.getElementById('genre');
let authorName = document.getElementById('author');
let isRead = document.getElementById('isRead');

//Add book to the Library

let listBookC = document.getElementById("listBook");

let listBooks = document.createElement('UL');
listBookC.appendChild(listBooks);



//Add current Book reading to the list 
let listBookR = document.getElementById('bookRead');
let listCurrentBooks = document.createElement('UL');
listBookR.appendChild(listCurrentBooks);



function AddBook(event) {
    event.preventDefault();
    console.log(event);

    (isRead.checked) ? (isReadValue = "Yes") : (isReadValue = 'No')


    let bookObj = homeLibrary.add(new Book(titleInput.value, genreInput.value, authorName.value, isReadValue));

    showBook();

    showCurrentReading();

    console.log('homeLi', homeLibrary)

    form.reset();

}

function showBook() {

    homeLibrary.books.slice(-1).map(item => {

            let bookLi = document.createElement('li');
            bookLi.innerHTML = `Title: ${item.title} Genre: ${item.genre} author: ${item.author} isRead:${isReadValue}`;

            bookLi.style.listStyleType = 'square';

            listBooks.appendChild(bookLi);
        }

    )
}

//Add book to current Reading list

let currentlyReadingLi = null;

function showCurrentReading() {



    if (currentlyReadingLi !== homeLibrary.currentlyReading.title) {

        console.log('currentlyReadingLi', currentlyReadingLi)
        let bookLi = document.createElement('li');
        bookLi.innerHTML = `Title: ${homeLibrary.currentlyReading.title} Genre: ${homeLibrary.currentlyReading.genre} author: ${homeLibrary.currentlyReading.author} isRead:${isReadValue}`;

        currentlyReadingLi = homeLibrary.currentlyReading.title;
        bookLi.style.listStyleType = 'square';

        listCurrentBooks.appendChild(bookLi);
    }


}






form.addEventListener('reset', removeBook);

function removeBook(event) {
    form.reset();

    console.log(homeLibrary);

}