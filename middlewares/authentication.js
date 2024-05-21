const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt.js");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    const payload = verifyToken(access_token);

    const validatedUser = await User.findOne({
      where: { email: payload.email },
    });

    if (!validatedUser) throw { name: "UNAUTHORIZED" };

    req.currentUser = {
      id: validatedUser.id,
      email: validatedUser.email,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
