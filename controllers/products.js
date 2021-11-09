const { Products, findOne } = require('../models/Products');
const { Web } = require('../services');

const handleSearch = async (req) => {
  if (!req.query) return null;

  const { site, category, search } = req.query;
  if (!site) return null;
  if (!category && !search) return null;

  console.log(Products);

  if (Products[site][`${category}&${search}`]) {
    return Products[site][`${category}&${search}`];
  }

  const products = await findOne(site, category, search);
  console.log(products);
  if (products) {
    Products[site][`${category}&${search}`] = products.products;
    return products.products;
  }

  const response = await Web[site].products(category, search);

  if (!response) return { error: 'no product found' };

  // Products[site][`${category}&${search}`] = response.results;
  // create(site, category, search, response.results);

  return response.results;
};

module.exports = { handleSearch };
