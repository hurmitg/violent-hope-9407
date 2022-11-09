const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await UserModel.findById(decoded.id).select("-password");
      next();
    } catch (e) {
      res.status(401);
      throw new Error("Not authorized, Invalid Credentials");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, Please Login");
  }
});

module.exports = { protect };
