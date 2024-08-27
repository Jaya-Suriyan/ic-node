const ProductService = require("../services/product");

class ProductController {
  static async insertProduct(req, res) {
    try {
      const { productname, category, record_count, field_list } = req.body;
      const product = await ProductService.insertProduct({
        productname,
        category,
        record_count,
        field_list,
      });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ msg: error.message || error });
    }
  }
  static async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductService.getProductById(id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ msg: error.message || error });
    }
  }
  static async getAllProduct(_req, res) {
    try {
      const products = await ProductService.getAllProduct({});
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json({ msg: error.message || error });
    }
  }
}
module.exports = ProductController;
