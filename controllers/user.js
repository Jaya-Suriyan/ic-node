const UserService = require("../services/user");
const bcrypt = require("bcrypt");
const jsonWebToken = require("jsonwebtoken");
class UserController {
  static async insertUser(req, res) {
    try {
      const { username, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashpassword = await bcrypt.hash(password, salt);
      const user = await UserService.insertUser({
        username,
        password: hashpassword,
      });
      return res.status(201).json(user);
    } catch (error) {
      console.log("error", error);
      return res.status(400).json({ msg: error.message || error });
    }
  }
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await UserService.getByUsername(username);
      if (!user) {
        return res.status(404).json({ msg: "Invalid username" });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ msg: "Invalid password" });
      }
      const secret = process.env.JWT_TOKEN_SECRET || "supersecret";
      const accessToken = jsonWebToken.sign(
        {
          username: user.username,
          id: user.id,
        },
        secret,
        { expiresIn: "1d" }
      );

      return res
        .status(200)
        .json({ token: accessToken, username: user.username, id: user.id });
    } catch (error) {
      console.log("Error", error);
      return res.status(400).json({ msg: "Password entered doesn't match" });
    }
  }
}
module.exports = UserController;
