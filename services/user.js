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
      const users = await User.findAll({
        attributes: { exclude: ["password"] },
      });

      return users;
    } catch (error) {
      throw error;
    }
  }

  static async DetailUser(id) {
    try {
      const user = await User.findByPk(id, {
        attributes: { exclude: ["password"] },
      });

      if (!user) throw new Error("User not found.");
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async EditUser(id, payload) {
    try {
      const user = await User.update(payload, {
        where: { id },
        returning: true,
        individualHooks: true,
      });

      return user[1][0];
    } catch (error) {
      throw error;
    }
  }

  static async ChangeRoleUser(id, role) {
    try {
      const user = await User.update(
        { role },
        {
          where: { id },
          returning: true,
        }
      );

      return user[1][0];
    } catch (error) {
      throw error;
    }
  }

  static async DeleteUser(id) {
    try {
      const user = await User.destroy({ where: { id } });

      return `User id ${id} has been deleted.`;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Service;
