const { MLcategories, MLproducts } = require('./mercadoLivre');
const { BPcategories, BPproducts } = require('./buscape');

const Web = {
  ML: {
    categories: async () => MLcategories(),
    products: async (category, search) => MLproducts(category, search),
  },
  BP: {
    categories: async () => BPcategories(),
    products: async (category, search) => BPproducts(category, search),
  },
};

module.exports = { Web };
