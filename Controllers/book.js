const Book = require("../Model/book");
const getAllBook = async (req, res) => {
  try {
    const bookList = Book.find({});
    res.status(200).json({
      message: "Successfull",
      count: bookList.length,
      data: bookList,
    });
  } catch (e) {
    res.status(400).json({
      message: "Please try again",
      error: e,
    });
  }
};

const getBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    res.status(200).json({
      message: "Successfull",
      data: book,
    });
  } catch (e) {
    res.status(400).json({
      message: "Please try again",
      error: e,
    });
  }
};

const uploadBook = async (req, res) => {
  const {
    title,
    bookclass,
    description,
    publisher,
    author,
    edition,
    mrp,
    sellingprice,
    pincode,
    state,
    city,
    landmark,
    imageurl,
    isavailable,
  } = req.body;

  if (!title || !author || !price || !description || !image || !category) {
    res.status(400).json({
      message: "Please provide all details",
    });
  }

  try {
    const book = await Book.create({
      title,
      author,
      price,
      description,
      image,
      category,
    });

    res.status(200).json({
      message: "Successfull",
      data: book,
    });
  } catch (e) {
    res.status(400).json({
      message: "Please try again",
      error: e,
    });
  }
};
const updateBook = async (req, res) => {
  res.status(200).json({
    message: "book uploaded",
  });
};
const deleteBook = async (req, res) => {
  res.status(200).json({
    message: "book deleted",
  });
};
module.exports = {
  getAllBook,
  getBook,
  uploadBook,
  updateBook,
  deleteBook,
};
