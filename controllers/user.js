const Service = require("../services/user.js");
const { success } = require("../utils/response.js");

class Controller {
  static async CreateUser(req, res, next) {
    try {
      const { name, email, role, gender, password } = req.body;
      const result = await Service.CreateUser({
        name,
        email,
        role,
        gender,
        password,
      });

      success(res, 200, "Successfully create new user.", result);
    } catch (error) {
      console.log(error);
    }
  }

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
