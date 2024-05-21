const { success, createError } = require("../utils/response.js");
const errorHandler = async (err, req, res, next) => {
  console.log(`❌Error is found❌`);

  if (err.response && err.response.data) {
    console.log(err.response.data);
  } else {
    console.log(err);
  }

  const err_obj = {
    status: null,
    message: null,
    description: null,
  };

  switch (err.name) {
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
    case "BAD_REQUEST":
      err_obj.status = 400;
      err_obj.message = "Bad Request";
      err_obj.description = err.message
        ? err.message
        : "The request is missing required parameters or contains invalid data.";
      break;
    case "UNAUTHORIZED":
      err_obj.status = 401;
      err_obj.message = "Unauthorized";
      err_obj.description = err.message
        ? err.message
        : "Invalid authentication credentials.";
      break;
    case "FORBIDDEN":
      err_obj.status = 403;
      err_obj.message = "Forbidden";
      err_obj.description = err.message
        ? err.message
        : "You are not authorized";
      break;
    case "NOT_FOUND":
      err_obj.status = 404;
      err_obj.message = "Not found";
      err_obj.description = err.message
        ? err.message
        : "Requested resource could not be found on the server.";
      break;
    default:
      err_obj.status = 500;
      err_obj.message = "Something went wrong. Please try again later!";
      err_obj.description = err.message
        ? err.message
        : err.stack && err.stack.split("\n")[0]
        ? err?.stack?.split("\n")[0]
        : "Something went wrong. Please try again later!";
  }

  createError(res, err_obj.status, err_obj.message, err_obj.description);
};
module.exports = errorHandler;
