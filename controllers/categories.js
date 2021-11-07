const { Categories, findOne, create } = require('../models/Categories');
const { fetchCategories } = require('../services');

const getCategories = async (site = 'ML') => {
  if (Categories[site]) {
    return Categories[site];
  }

  const categories = await findOne(site);

  if (categories) {
    return categories.categories;
  }

  const response = await fetchCategories(site);

  Categories[site] = response;
  create(site, response);

  return response;
};

module.exports = {
  getCategories,
};
