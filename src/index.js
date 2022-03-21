const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4455;

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Arbaz:Arbaz123@cluster0.ngabv.mongodb.net/Publisher?"
  );
};

// USERS SCHEMA
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, minlength: 3, maxlength: 30 },
    lastName: { type: String, required: false, minlength: 3, maxlength: 30 },
    age: { type: Number, required: true, min: 1, max: 150 },
    email: { type: String, required: true, unique: true },
    profileImages: [{ type: String, max: 1 }],
  },
  {
    timestamps: { type: String, required: true },
  }
);

// USER MODEL
const User = new mongoose.model("user", userSchema);

// BOOKS SCHEMA
const bookSchema = new mongoose.Schema(
  {
    likes: { type: Number, default: 0 },
    coverImage: { type: String, required: true, max: 1 },
    content: { type: String, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: { type: String, required: true },
  }
);

// BOOK MODEL
const Book = new mongoose.model("book", bookSchema);

// PUBLICATION SCHEMA
const publicationSchema = new mongoose.Schema(
  {
    name: { type: String },
    bookId: { type: String, required: true },
  },
  {
    timestamps: { type: String, required: true },
  }
);

// COMMENT MODEL
const Publication = new mongoose.model("publication", publicationSchema);

// COMMENT SCHEMA
const commentSchema = new mongoose.Schema(
  {
    body: { type: String },
    userId: { type: String, required: true },
    bookId: { type: String, required: true },
  },
  {
    timestamps: { type: String, required: true },
  }
);

// COMMENT MODEL
const Comment = new mongoose.model("publication", publicationSchema);

app.listen(port, () => {
  try {
    return connect();
  } catch (error) {
    console.log("error", error);
  }

  console.log(`listening to the port ${port}`);
});
