const { MLcategories } = require('./mercadoLivre');

const fetchCategories = async (site = 'ML') => {
  const sites = {
    ML: await MLcategories(),
    BP: null,
  };

  return sites[site];
};

module.exports = { fetchCategories };
