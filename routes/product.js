const express = require("express");
const authToken = require("../helper/jwt");
const ProductController = require("../controllers/product");
const router = new express.Router();

router.post("/", authToken, ProductController.insertProduct);
router.get("/", authToken, ProductController.getAllProduct);
router.get("/:id", authToken, ProductController.getProductById);

module.exports = router;