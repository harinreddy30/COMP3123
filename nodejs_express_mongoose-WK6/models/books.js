const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    author: String,
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;