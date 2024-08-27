const models = require("../models/index");
class UserService {
  static async insertUser(payload) {
    return models.User.create({
      username: payload.username,
      password: payload.password,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  }

  static async getByUsername(username) {
    return models.User.findOne({
      where: { username: username },
    });
  }
}
module.exports = UserService;
