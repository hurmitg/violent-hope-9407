const jwt = require("jsonwebtoken");
const jwt_Secret = "theresa@123#clone";
const generateToken = (id) => {
  return jwt.sign({ id }, jwt_Secret, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
