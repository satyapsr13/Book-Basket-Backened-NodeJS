const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true,
    },
    bookclass: {
      type: String,
    },

    description: {
      type: String,
    },

    publisher: {
      type: String,
    },
    author: {
      type: String,
    },
    edition: {
      type: String,
    },
    mrp: {
      type: Number,
    },
    sellingprice: {
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
    imageurl: {
      type: String,
    },
    isavailable: {
      type: Boolean,
      default: true,
    },
   
  },
  { timestamps: true }
);
module.exports = mongoose.model("Book", BookSchema);
