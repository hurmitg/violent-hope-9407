const jwt = require("jsonwebtoken");
const jwt_Secret = "theresa@123#clone";
/**
 * Generates a JWT token for the given user ID.
 */
const generateToken = (id) => {
  return jwt.sign({ id }, jwt_Secret, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
