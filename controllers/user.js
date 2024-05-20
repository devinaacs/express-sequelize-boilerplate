const Service = require("../services/user.js");
const { success } = require("../utils/response.js");

class Controller {
  static async ListUsers(req, res, next) {
    try {
      const result = await Service.ListUsers();

      success(res, 200, "Successfully get list users.", result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
