"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      productname: DataTypes.STRING,
      category: DataTypes.STRING,
      record_count: DataTypes.NUMBER,
      field_list: DataTypes.ARRAY(DataTypes.STRING),
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
