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

  // check null condition
  if (
    !title ||
    !bookclass ||
    !description ||
    !publisher ||
    !author ||
    !edition ||
    !mrp ||
    !sellingprice ||
    !pincode ||
    !state ||
    !city ||
    !landmark ||
    !imageurl ||
    !isavailable
  ) {
    return res.status(400).json({
      message: "Please enter all the fields",
    });
  }

  try {
    const book = await Book.create({
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

  // check null condition
  if (
    !title ||
    !bookclass ||
    !description ||
    !publisher ||
    !author ||
    !edition ||
    !mrp ||
    !sellingprice ||
    !pincode ||
    !state ||
    !city ||
    !landmark ||
    !imageurl ||
    !isavailable
  ) {
    return res.status(400).json({
      message: "Please enter all the fields",
    });
  }

  const { id } = req.params;
  try {
    const book = await Book.findByIdAndUpdate(id, {
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
const deleteBook = async (req, res) => {
  const id = req.params;
  try {
    const deletedBook = Book.findByIdAndDelete(id);
    res.status(200).json({
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (error) {
    res.status(400).json({
      message: "Please try again after some time!",
    });
  }
};
module.exports = {
  getAllBook,
  getBook,
  uploadBook,
  updateBook,
  deleteBook,
};
