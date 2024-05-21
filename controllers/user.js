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

  static async DetailUser(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Service.DetailUser(id);

      success(res, 200, "Successfully get detail user.", result);
    } catch (error) {
      console.log(error);
    }
  }

  static async EditUser(req, res, next) {
    try {
      const { id } = req.params;
      const { name, email, role, gender, password } = req.body;
      const payload = { name, email, role, gender, password };

      for (let key in payload) {
        if (!payload[key]) delete payload[key];
      }

      const result = await Service.EditUser(id, payload);

      success(res, 200, "Successfully edit detail user.", result);
    } catch (error) {
      console.log(error);
    }
  }

  static async ChangeRoleUser(req, res, next) {
    try {
      const { id } = req.params;
      const { role } = req.body;

      const result = await Service.ChangeRoleUser(id, role);

      success(res, 200, "Successfully change role user.", result);
    } catch (error) {
      console.log(error);
    }
  }

  static async DeleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const result = await Service.DeleteUser(id);

      success(res, 200, "Successfully delete user.", result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
