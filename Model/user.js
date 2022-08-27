const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    require: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"],
    maxlength: [50, "Name can not be greater than 50 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [5, "Password must be at least 5 characters long"],
    maxlength: [20, "Password can not be greater than 20 characters long"],
  },
  //   emailAddress: [String],
  //   gender: {
  //     type: String,
  //     enum: ["male", "female"],
  //   },
  //   admin: Boolean,
  //   location: String,
});
module.exports = mongoose.model("User", UserSchema);
