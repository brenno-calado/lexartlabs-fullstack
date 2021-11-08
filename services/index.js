const { MLcategories, MLproducts } = require('./mercadoLivre');

const Web = {
  ML: {
    categories: async () => MLcategories(),
    products: async (category, search) => MLproducts(category, search),
  },
  BP: null,
};

module.exports = { Web };
