const express = require("express");
const {
  getAllBooks,
  getBook,
  uploadBookToSell,
  updateBook,
  deleteBook,
} = require("../Controllers/job");
// const authenticationMiddleware = require("../Middlewares/auth");
const router = express.Router();
router.route("/").post(uploadBookToSell).get(getAllBooks);
router.route("/:id").get(getBook).put(updateBook).delete(deleteBook);

module.exports = router;
//
