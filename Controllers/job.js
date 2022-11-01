const Book = require("../Model/book");
const getAllBooks = async (req, res) => {
  try {
    const books = Book.find({});
    res.status(200).json({
      message: "Successfull",
      data: books,
    });
  } catch (error) {
    res.status(400).json({
      message: "Please try again",
      error: error,
    });
  }
};
const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json({
      message: "Successfull",
      data: book,
    });
  } catch (error) {}
  res.status(400).json({
    message: "Please try again",
    error: error,
  });
};
const uploadBookToSell = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json({
      message: "Successfully uploaded your book for sell",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      message: "Please try again",
      error: error,
    });
  }
};
const updateBook = async (req, res) => {
  res.status(200).json({
    message: "updateBook",
  });
};
const deleteBook = async (req, res) => {
  try {
    const deletedBook = Book.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Successfully deleted your book",
      data: deletedBook,
    });
  } catch (error) {
    res.status(400).json({
      message: "Please try again",
      error: error,
    });
  }
};
module.exports = {
  getAllBooks,
  getBook,
  uploadBookToSell,
  updateBook,
  deleteBook,
};
