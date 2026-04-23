const myLibrary = [];

// Load from localStorage first
loadFromLocalStorage();

// Constructor
function Book(title, author, pages, year, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.read = read;
}

// FIXED toggle
Book.prototype.toggleRead = function () {
    this.read = !this.read;
};

// Add book
function addBookToLibrary(title, author, pages, year, read) {
    const newBook = new Book(title, author, pages, year, read);
    myLibrary.push(newBook);

    saveToLocalStorage(); // 🔥 save after adding
}

// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(myLibrary));
}

// Load from localStorage
function loadFromLocalStorage() {
    const data = localStorage.getItem("books");

    if (!data) return;

    const parsed = JSON.parse(data);

    parsed.forEach(book => {
        const newBook = new Book(
            book.title,
            book.author,
            book.pages,
            book.year,
            book.read
        );

        newBook.id = book.id; // keep same ID
        myLibrary.push(newBook);
    });
}

// DOM container
const bookContainer = document.querySelector("#bookContainer");

// Display books
function displayBooks() {
    bookContainer.innerHTML = "";

    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("container");
        card.dataset.id = book.id;

        const header = document.createElement("h1");
        header.textContent = book.title;

        const authorPara = document.createElement("p");
        authorPara.textContent = `Author : ${book.author}`;

        const pagesPara = document.createElement("p");
        pagesPara.textContent = `Pages : ${book.pages}`;

        const yearPara = document.createElement("p");
        yearPara.textContent = `Year : ${book.year}`;

        const status = document.createElement("p");
        status.textContent = book.read ? "Read" : "Not Read";

        // Toggle button
        const toggleBtn = document.createElement("button");
        toggleBtn.classList.add("contBtn");
        toggleBtn.textContent = "Toggle Read";

        toggleBtn.addEventListener("click", () => {
            book.toggleRead();
            saveToLocalStorage(); // 🔥 save change
            displayBooks();
        });

        // Remove button
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("contBtn");
        removeBtn.textContent = "Remove";

        removeBtn.addEventListener("click", () => {
            removeBook(book.id);
        });

        card.appendChild(header);
        card.appendChild(authorPara);
        card.appendChild(pagesPara);
        card.appendChild(yearPara);
        card.appendChild(status);
        card.appendChild(toggleBtn);
        card.appendChild(removeBtn);

        bookContainer.appendChild(card);
    });
}

// Remove book
function removeBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    myLibrary.splice(index, 1);

    saveToLocalStorage(); // 🔥 save after remove
    displayBooks();
}

// Form
const form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const year = document.getElementById("year").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, year, read);

    form.reset();

    displayBooks();
});

// Initial render
displayBooks();