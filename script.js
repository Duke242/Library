let myLibrary = [];

function Book(author, pageNumber, title) {
  // the constructor...
  this.author = author
  this.pageNumber = pageNumber
  this.title = title 
}

function addBookToLibrary() {
  // do stuff here
  myLibrary.push(Book)
}

const wind = new Book("duke",20,"wind")
const rain = new Book("steve",40,"rain")

myLibrary.push(rain)
myLibrary.push(wind)
console.log(myLibrary)