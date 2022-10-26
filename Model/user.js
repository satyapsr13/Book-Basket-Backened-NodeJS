const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
  },

  email: {
    type: String,
    required: [true, "Email is required"],

    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [5, "Password must be at least 5 characters long"],
    maxlength: [20, "Password can not be greater than 20 characters long"],
  },
  mobilenumber: {
    type: Number,
  },
  pincode: {
    type: Number,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  landmark: {
    type: String,
  },
  //   emailAddress: [String],
  //   gender: {
  //     type: String,
  //     enum: ["male", "female"],
  //   },
  //   admin: Boolean,
  //   location: String,
});
module.exports = mongoose.model("Users", UserSchema);
