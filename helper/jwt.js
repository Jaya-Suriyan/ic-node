const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ msg: "Token not found" });
  }
  const token = authHeader.split(" ")[1];
  const secret = process.env.JWT_TOKEN_SECRET || "supersecret";

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ msg: "Invalid Token" });
    }
    console.log("Token decode: ", decoded);
    next();
  });
};

module.exports = authToken;
