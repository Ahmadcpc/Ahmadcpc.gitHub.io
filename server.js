const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Sample database (replace with your actual database)
let books = [
    { id: 1, title: 'Book 1', summary: 'Summary 1' },
    { id: 2, title: 'Book 2', summary: 'Summary 2' },
    // Add more books here
];

// Get all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Add a new book
app.post('/api/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book
app.put('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    books = books.map(book => (book.id === id ? updatedBook : book));
    res.json(updatedBook);
});

// Delete a book
app.delete('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(book => book.id !== id);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
