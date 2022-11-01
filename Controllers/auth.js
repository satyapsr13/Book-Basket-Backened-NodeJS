const BadRequestError = require("../Errors/index");
const jwt = require("jsonwebtoken");
const User = require("../Model/user");
// const StatusCodes = require("http-status-codes");
const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    // throw new BadRequestError("Please provide name, email and password");
    res.status(400).json({
      message: "Email and password can not be empty!",
      //  user: user,
    });
  }

  try {
    const user = new User.create({ ...req.body });


    res.status(200).json({
      message: "Successfully registered",
      user: user,
    });
  } catch (e) {
    res.status(400).json({
      message: "Please try again!",
      error: e,
    });
  }

  // const id = new Date().getDate();

  // const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
  //   expiresIn: "30d",
  // });
};
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      message: "Username and password can not be empty!",
      //  user: user,
    });
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({
    iam: username,
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
