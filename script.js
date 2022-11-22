let myLibrary = [];

function Book(author, pageNumber, title) {
  // the constructor...
  this.author = author;
  this.pageNumber = pageNumber;
  this.title = title;
}

const titleInput = document.getElementById("title-input");
const pageNumberInput = document.getElementById("pageNumber-input");
const authorInput = document.getElementById("author-input");

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

//function arrayLoop() {
//      const table = document.createElement("table");

//     for (let i = 0; i < myLibrary.length; i += 1) {
//        const row = document.createElement("tr");
//        row.setAttribute("id", "row"+i);

//        const button = document.createElement("button");
//        button.innerHTML = "Delete";
//        button.addEventListener("click", (evt) => {
//           // do something with for row i
//           table.removeChild(row);
//        });
//        const cell1 = document.createElement("td");
//        row.addChildNode(cell1);
//        row.addChildNode(button);
//        table.addChildNode(row);
//      }
//      document.getElementById("box").addChildNode(table);
// }

function arrayLoop() {
  const table = document.createElement("table");
  for (let i = 0; i < myLibrary.length; i += 1) {
    const row = document.createElement("tr");
    row.setAttribute("id", "row" + i);

    const button = document.createElement("button");
    button.innerHTML = "Delete";
    button.addEventListener("click", (evt) => {
      //do something with the row
      table.removeChild(row);
    });
    const cell1 = document.createElement("td");
    row.addChildNode(cell1);
    row.addChildNode(button);
    table.addChildNode(row);
  }
  document.getElementById("box").addChildNode(table);
}

// function arrayLoop() {
//   var htmlButton = "<button>Delete</button>"
//   var html = "<table border='1|1'>";
//   for (var i = 0; i < myLibrary.length; i++) {
//     html += "<tr>";
//     html += "<td>" + myLibrary[i].author + "</td>";
//     html += "<td>" + myLibrary[i].pageNumber + "</td>";
//     html += "<td>" + myLibrary[i].title + "</td>";
//     html += "<td>" + htmlButton + "</td>";
//     html += "</tr>";
//   }

//   html += "</table>";
//   document.getElementById("box").innerHTML = html;
// }

window.addEventListener("load", () => {
  document.querySelector("form")?.addEventListener("submit", (evt) => {
    evt.preventDefault();
    var t = titleInput;
    var p = pageNumberInput;
    var a = authorInput;
    if (t.value == "" || p.value == "" || a.value == "") {
      window.alert("Fill in the form completely!");
    } else {
      let x = new Book(t.value, p.value, a.value);
      addBookToLibrary(x);
      console.log(x);
      console.log(t.value);
      console.log(p.value);
      console.log(a.value);
      arrayLoop();
    }
    console.log(myLibrary);
  });
});

const btns = document.querySelectorAll("button");
const btnsArray = Array.from(btns);
btnsArray.forEach((elem, idx) => {
  console.log(btnsArray);
});
