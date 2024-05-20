const { User } = require("../models");

class Service {
  static async CreateUser(payload) {
    try {
      const user = await User.create(payload);

      return user;
    } catch (error) {
      throw error;
    }
  }
  static async ListUsers() {
    try {
      const users = await User.findAll();

      return users;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Service;
