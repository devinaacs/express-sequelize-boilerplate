const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET_KEY;

const createToken = (payload) => {
  const expiryIn = "1d";
  return jwt.sign(payload, SECRET_KEY, { expiresIn: expiryIn });
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

module.exports = {
  createToken,
  verifyToken,
};
