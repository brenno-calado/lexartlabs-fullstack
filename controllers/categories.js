const { Categories, findOne, create } = require('../models/Categories');
const { Web } = require('../services');

const getCategories = async (site = 'ML') => {
  if (Categories[site].length) {
    return Categories[site];
  }

  const categories = await findOne(site);

  if (categories) {
    Categories[site] = categories.categories;
    return categories.categories;
  }

  const response = await Web[site].categories();

  Categories[site] = response;
  create(site, response);

  return response;
};

module.exports = {
  getCategories,
};
