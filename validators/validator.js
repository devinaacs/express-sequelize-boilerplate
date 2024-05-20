const validator = async (schema, payload) => {
  try {
    const data = await schema.validateAsync(payload);
    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = validator;
