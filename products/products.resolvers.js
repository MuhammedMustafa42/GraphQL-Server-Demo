const {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
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
  Mutation: {
    addNewProduct: (_parent, args) => {
      return addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_parent, args) => {
      return addNewProductReview(args.id, args.rating, args.comment);
    },
  },
};
