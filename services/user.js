const { User } = require("../models");

class Service {
  static async ListUsers() {
    try {
      console.log("masuk");
      const users = await User.findAll();
      console.log(users);
      return users;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Service;
