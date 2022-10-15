
const getAllBooks = async (req, res) => {
  res.status(200).json({
    message: "getAllBooks",
  });
};
const getBook = async (req, res) => {
  res.status(200).json({
    message: "getBook",
  });
};
const uploadBookToSell = async (req, res) => {
  res.status(200).json({
    message: "uploadBookToSell",
  });
};
const updateBook = async (req, res) => {
  res.status(200).json({
    message: "updateBook",
  });
};
const deleteBook = async (req, res) => {
  res.status(200).json({
    message: "deleteBook",
  });
};
module.exports = {
  getAllBooks,
  getBook,
  uploadBookToSell,
  updateBook,
  deleteBook,
};
