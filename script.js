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
}

function addBook(){
    const form = document.querySelector('.form');
    form.style.display = "block";
}