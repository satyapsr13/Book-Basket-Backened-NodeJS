const express = require("express");
const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require("../Controllers/job");
// const authenticationMiddleware = require("../Middlewares/auth");
const router = express.Router();
router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").get(getJob).put(updateJob).delete(deleteJob);

module.exports = router;
//
