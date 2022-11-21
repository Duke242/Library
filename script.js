let myLibrary = [];

// let cars = ["honda", "toyota"];

function Book(author, pageNumber, title) {
  // the constructor...
  this.author = author;
  this.pageNumber = pageNumber;
  this.title = title;
}

const titleInput = document.getElementById('title-input');
const pageNumberInput = document.getElementById('pageNumber-input');
const authorInput = document.getElementById('author-input');


function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

const wind = new Book("duke", 20, "wind");
const rain = new Book("steve", 40, "rain");

myLibrary.push(rain);
myLibrary.push(wind);
// console.log(myLibrary);

// function arrayLoop(array) {
//   console.log(array);
//   let test = array.map((x, index) => {
//     console.log(x, index);
//     return x
//   });
 
// }

function arrayLoop() {
var html = "<table border='1|1'>";
for (var i = 0; i < myLibrary.length; i++) {
    html+="<tr>";
    html+="<td>"+myLibrary[i].author+"</td>";
    html+="<td>"+myLibrary[i].pageNumber+"</td>";
    html+="<td>"+myLibrary[i].title+"</td>";
    
    html+="</tr>";

  }

html+="</table>";
document.getElementById("box").innerHTML = html;
}

window.addEventListener("load", () => {
  document.querySelector("form")?.addEventListener("submit", (evt) => {
    evt.preventDefault();
    var t = titleInput
    var p = pageNumberInput
    var a = authorInput
        if (t.value == "" || p.value == "" || a.value == "") {
          window.alert("Fill in the form completely!")
    } else {
       let x = new Book(t.value,p.value,a.value) 
       addBookToLibrary(x)
       console.log(x)
       console.log(t.value)
       console.log(p.value)
       console.log(a.value)
       arrayLoop()
    }
   console.log(myLibrary)

  })
});