const models = require("../models/index");
class ProductService {
  static async insertProduct(payload) {
    return models.Product.create({
      productname: payload.productname,
      category: payload.category,
      record_count: payload.record_count,
      field_list: payload.field_list,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  }
  static async getProductById(id) {
    return models.Product.findOne({
      where: { id: id },
    });
  }
  static async getAllProduct(payload) {
    return models.Product.findAll({
      order: [
        ["id", "DESC"],
        ["productname", "ASC"],
      ],
    });
  }
}
module.exports = ProductService;
