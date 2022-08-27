const BadRequestError = require("../Errors/index");
const jwt = require("jsonwebtoken");
const User = require("../Model/user");
const StatusCodes = require("http-status-codes");
const register = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    throw new BadRequestError("Please provide name, email and password");
  }

  const user = new User.create({ ...req.body });

  // const id = new Date().getDate();

  // const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
  //   expiresIn: "30d",
  // });

  res.status(StatusCodes.CREATED).json({
    message: "Successfully registered",
    user: user,
  });
};
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({
    iam: " Fake login or signUp",
    token: token,
  });
};
const dashBoard = async (req, res) => {
  try {
    res.status(200).json({
      user: `${req.user.username}`,
    });
  } catch (error) {
    throw new BadRequestError("Not authorized access to this route!", 400);
  }
};

module.exports = {
  register,
  login,
  dashBoard,
};
