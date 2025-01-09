const myLibrary = [];

function book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages=  pages,
    this.read = read;
}

function getInputValue(){
    let inputVal = document.getElementsByTagName('input');
    let array = Array.from(inputVal);
    let obj = new book(array[0].value, array[1].value, array[2].value, array[3].value);
    myLibrary.push(obj);
    for (let index = 0; index < myLibrary.length; index++) {
        console.log(myLibrary[index]);
    }
    const form = document.querySelector('.form');
    form.style.display = "none";
    for (let input of inputVal) {
        input.value = ''; // Clear the text in each input field
    }
    const container = document.querySelector('.container');
    container.style.visibility = "visible";

    addToLibrary();
}
let index = 0;
function addToLibrary(){
    let parentDiv = document.querySelector('.container');
    let childDiv = document.createElement('div');
    childDiv.innerHTML = `Title: ${myLibrary[index].title} <br>` +
                     `Author: ${myLibrary[index].author} <br>` +
                     `Pages: ${myLibrary[index].pages} <br>` +
                     `Notes: ${myLibrary[index].read}` ;
    childDiv.classList.add('childClass');
    parentDiv.appendChild(childDiv);
    index++;
}

function addBook(){
    const form = document.querySelector('.form');
    form.style.display = "block";
    const container = document.querySelector('.container');
    container.style.visibility = "hidden";
}