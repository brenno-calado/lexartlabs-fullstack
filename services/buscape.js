const cheerio = require('cheerio');
const got = require('got');

const URL = 'https://www.buscape.com.br';
const ALLCATEGORIES = '/todas-categorias';
const CATSELECTOR = '.CatBranch_CatTitle__b176b';

const BPcategories = async () => {
  const response = await got(`${URL}${ALLCATEGORIES}`);
  const body = cheerio.load(response.body);

  const categories = [];
  body(CATSELECTOR).each((_index, category) => {
    categories.push({
      id: category.attribs.href,
      name: category.children[0].data,
    });
  });
  return categories;
};

const BPproducts = async () => {

};

module.exports = { BPcategories, BPproducts };
