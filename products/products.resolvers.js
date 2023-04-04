const {
  getAllProducts,
  getProductsByPrice,
  getProductById,
} = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
    productsByPrice: (_parent, args) => {
      return getProductsByPrice(args.min, args.max);
    },
    product: (_parent, args) => {
      return getProductById(args.id);
    },
  },
};
