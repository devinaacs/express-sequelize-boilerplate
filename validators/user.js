const Joi = require("joi");

const validator = require("./validator.js");
const { SUPERADMIN, ADMIN } = require("../constants/role.js").ROLE;
const { MALE, FEMALE, NA } = require("../constants/gender.js").GENDER;

const name = Joi.string();
const email = Joi.string().email();
const role = Joi.string().valid(SUPERADMIN, ADMIN);
const gender = Joi.string().valid(MALE, FEMALE, NA);
const password = Joi.string().required();

const page = Joi.number();
const limit = Joi.number();
const search = Joi.string().allow("", null);

const sort_by = Joi.string().allow("", null);

module.exports = {
  postCreate: async (req, res, next) => {
    try {
      const schema = Joi.object({
        body: {
          name: name.required(),
          email: email.required(),
          role: role.required(),
          gender: gender.required(),
          password,
        },
      });

      await validator(schema, {
        body: req.body,
      });
      next();
    } catch (error) {
      next(error);
    }
  },
};
