require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorHandler = require("./helper/errorHandler");
const morgan = require("morgan");
const logger = require("./helper/logger");

const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  }
);

const app = express();

const port = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(errorHandler);

app.use(morganMiddleware);

app.get("/", (_req, res) => res.json({ msg: "Hello, Nodejs!" }));

app.use("/user", userRoutes);
app.use("/product", productRoutes);


app.listen(port, () => console.log(`Server is running on port: ${port}`));
