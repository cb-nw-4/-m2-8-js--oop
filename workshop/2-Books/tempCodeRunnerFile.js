const homeLibrary = new BookList();

homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));
homeLibrary.add(
  new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true)
);
homeLibrary.add(new Book('The Eire Affair', 'Fantasy', 'Jasper Fforde'));
homeLibrary.add(
  new Book('The Revisionists', 'Science-fiction', 'thomas Mullen')
);

console.log('initial state', homeLibrary.currentlyReading); // should be The Shining book object
console.log('initial last-read', homeLibrary.lastRead); // should be null

homeLibrary.finishReading('The Shining');
console.log(
  'Currently reading, after finishing The Shining',
  homeLibrary.currentlyReading
); // should be null
console.log('Last-read, after finishing The Shining', homeLibrary.lastRead); // should be The Shining

homeLibrary.startReading('The Revisionists');
console.log(
  'Currentky reading, After starting The Revisionists',
  homeLibrary.currentlyReading
); // should be The Revisionists book