const bcrypt = require("bcryptjs");

const createHash = (password) => {
  return bcrypt.hashSync(password, 8);
};

const compareHash = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = {
  createHash,
  compareHash,
};
