const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/user.controllers");
const { protect } = require("../middlewares/auth.middleware");

const user = express.Router();

user.route("/").get(protect, allUsers);

user.post("/signup", registerUser);

user.post("/login", authUser);

module.exports = user;
