const myLibrary = [];

function book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages=  pages,
    this.read = read;
}

function addBookLibrary(){
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
}

function getInputValue(){
    let inputVal = document.getElementsByTagName('input')
    Array.from(inputVal).forEach(element => {
        console.log(element.value);
    });
}