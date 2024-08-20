const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleReadStatus() {
    this.read = !this.read;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  const libraryDiv = document.getElementById('library');
  libraryDiv.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>${book.read ? 'Read' : 'Not Read Yet'}</p>
      <button class="toggle-read" data-index="${index}">Toggle Read</button>
      <button class="remove-book" data-index="${index}">Remove</button>
    `;

    libraryDiv.appendChild(bookCard);
  });

  addEventListeners();
}

function addEventListeners() {
  const removeButtons = document.querySelectorAll('.remove-book');
  const toggleReadButtons = document.querySelectorAll('.toggle-read');

  removeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      myLibrary.splice(index, 1);
      displayBooks();
    });
  });

  toggleReadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      myLibrary[index].toggleReadStatus();
      displayBooks();
    });
  });
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

document.getElementById('addBookForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  document.getElementById('addBookForm').reset();
  dialog.close();
});