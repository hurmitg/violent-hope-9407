const jwt = require("jsonwebtoken");
const jwt_Secret = process.env.TOKEN;
/**
 * Generates a JWT token for the given user ID.
 */
const generateToken = (id) => {
  return jwt.sign({ id }, jwt_Secret, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
