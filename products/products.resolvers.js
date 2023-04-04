const { getAllProducts, getProductsByPrice } = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
    productsByPrice: (_parent, args) => {
      return getProductsByPrice(args.min, args.max);
    },
  },
};
