const {
  getAllBook,
  getBook,
  uploadBook,
  updateBook,
  deleteBook,
} = require("../Controllers/book");
const router = require("express").Router();

router.route("/").get(getAllBook).post(uploadBook);
// router.route("/delete/:id").post(deleteBook);
router.route("/:id").get(getBook).patch(updateBook).delete(deleteBook);

module.exports = router;
