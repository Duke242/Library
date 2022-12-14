let myLibrary = [];

function Book(author, pageNumber, title) {
  // the constructor...
  this.author = author;
  this.pageNumber = pageNumber;
  this.title = title;
}

Book.prototype.read = false

const titleInput = document.getElementById("title-input");
const pageNumberInput = document.getElementById("pageNumber-input");
const authorInput = document.getElementById("author-input");

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function arrayLoop() {
  const table = document.createElement("table");
  table.style.border = "1px solid #000"
  for (let i = 0; i < myLibrary.length; i += 1) {
    
    const row = document.createElement("tr");
    row.setAttribute("id", "row" + i);

    const readButton = document.createElement("button");

    if (myLibrary[i].read === false) { 
      readButton.innerHTML = "Not Read"
    } else if (myLibrary[i].read === true) {
      readButton.innerHTML = "Read"
    } else {return}


    readButton.addEventListener("click", () => {
      myLibrary[i].read = !myLibrary[i].read 
       console.log(myLibrary[i])
      if (myLibrary[i].read === false) { 
        readButton.innerHTML = "Not Read"
      } else if (myLibrary[i].read === true) {
        readButton.innerHTML = "Read"
      } else {return}
    })
  
    const button = document.createElement("button");
    button.innerHTML = "Delete";
    button.addEventListener("click", (evt) => {
      myLibrary.splice(i, 1)
      arrayLoop()
    });
  [myLibrary[i].title, myLibrary[i].pageNumber, myLibrary[i].author].forEach((prop) => { 
    const cell = document.createElement('td')
    cell.textContent = prop 
    row.appendChild(cell)
  })
  row.appendChild(button);
  row.appendChild(readButton);
  table.appendChild(row);
  }
  document.getElementById("box").innerHTML = "";
  document.getElementById("box").appendChild(table)
}

window.addEventListener("load", () => {
  document.querySelector("form").addEventListener("submit", (evt) => {
    evt.preventDefault();
    var t = titleInput;
    var p = pageNumberInput;
    var a = authorInput;
    if (t.value == "" || p.value == "" || a.value == "") {
      window.alert("Fill in the form completely!");
    } else {
      let x = new Book(t.value, p.value, a.value);
      addBookToLibrary(x);
      arrayLoop()
    }
   
  });
});
