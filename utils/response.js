const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Jakarta");

function success(res, status_code, message, data) {
  res.status(status_code).json({
    status_code,
    timestamp: `${moment().format("YYYY-MM-DD HH:mm:ss")} (Asia/Jakarta)`,
    success: true,
    message,
    data,
    error: null,
  });
}

function createError(res, status_code, message, error) {
  res.status(status_code).json({
    status_code,
    timestamp: `${moment().format("YYYY-MM-DD HH:mm:ss")} (Asia/Jakarta)`,
    success: false,
    message,
    data: null,
    error,
  });
}

module.exports = {
  success,
  createError,
};
