
const getAllJobs = async (req, res) => {
  res.status(200).json({
    message: "getAllJobs",
  });
};
const getJob = async (req, res) => {
  res.status(200).json({
    message: "getJob",
  });
};
const createJob = async (req, res) => {
  res.status(200).json({
    message: "createJob",
  });
};
const updateJob = async (req, res) => {
  res.status(200).json({
    message: "updateJob",
  });
};
const deleteJob = async (req, res) => {
  res.status(200).json({
    message: "deleteJob",
  });
};
module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
