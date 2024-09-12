const books = [
    { title: "Book 1", author: "Author 1" },
    { title: "Book 2", author: "Author 2" },
    { title: "Book 3", author: "Author 3" },
    { title: "Book 4", author: "Author 4" },
    { title: "Book 5", author: "Author 5" }
];

const ul = document.getElementById('book-list');

function generateBookList(booksArray) {
	booksArray.forEach(book => {
		const li = document.createElement('li');
		li.textContent = `${book.title} written by ${book.author}`;
		ul.appendChild(li);
	});
}

generateBookList(books);