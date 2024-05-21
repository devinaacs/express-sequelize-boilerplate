const Joi = require("joi");

const validator = require("./validator.js");
const { SUPERADMIN, ADMIN } = require("../constants/role.js").ROLE;
const { MALE, FEMALE, NA } = require("../constants/gender.js").GENDER;

const id = Joi.number().required();

const name = Joi.string();
const email = Joi.string().email();
const role = Joi.string().valid(SUPERADMIN, ADMIN);
const gender = Joi.string().valid(MALE, FEMALE, NA);
const password = Joi.string();

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
          password: password.required(),
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

  getList: async (req, res, next) => {
    try {
      const schema = Joi.object({
        query: {
          page,
          limit,
          search,
          sort_by,
        },
      });
      await validator(schema, {
        query: req.query,
      });
      next();
    } catch (error) {
      next(error);
    }
  },

  getDetail: async (req, res, next) => {
    try {
      const schema = Joi.object({
        params: {
          id,
        },
      });
      await validator(schema, {
        params: req.params,
      });
      next();
    } catch (error) {
      next(error);
    }
  },

  putEdit: async (req, res, next) => {
    try {
      const schema = Joi.object({
        body: {
          name: name.allow("", null),
          email: email.allow("", null),
          role: role.allow("", null),
          gender: gender.allow("", null),
          password: password.allow("", null),
        },
        params: { id },
      });

      await validator(schema, {
        body: req.body,
        params: req.params,
      });
      next();
    } catch (error) {
      next(error);
    }
  },

  patchChange: async (req, res, next) => {
    try {
      const schema = Joi.object({
        body: {
          role: role.required(),
        },
        params: { id },
      });

      await validator(schema, {
        body: req.body,
        params: req.params,
      });
      next();
    } catch (error) {
      next(error);
    }
  },
};
