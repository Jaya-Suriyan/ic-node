const errorHandler = (err, req, res, next) => {
  console.error("errorHandler =>", err, req, res, next);
  res.status(500).send(err.message);
};

module.exports = errorHandler;
