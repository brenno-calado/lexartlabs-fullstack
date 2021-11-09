const cheerio = require('cheerio');
const got = require('got');

const URL = 'https://www.buscape.com.br';
const ALLCATEGORIES = '/todas-categorias';
const SEARCH = '/search?q=';
const CATSELECTOR = 'li .CatBranch_SubCatTitle__2tk7u';
const PRODSELECTOR = '.Cell_Content__1630r';

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

const BPproducts = async (category, search) => {
  const products = [];
  if (search) {
    const response = await got(`${URL}${SEARCH}${search}`);
    const body = cheerio.load(response.body);
    body(PRODSELECTOR).each((index, product) => {
      const price = body('.CellPrice_MainValue__3s0iP', product).text();
      const img = body('.Cell_Image__2-Jrs', product);
      products.push({
        id: index,
        title: product.attribs.title,
        price: price.split('R$ ')[1],
        permalink: `${URL}${product.attribs.href}`,
        thumbnail: img,
        original_price: '',
      });
    });
    return { results: products };
  }

  const response = await got(`${URL}/${category}`);
  const body = cheerio.load(response.body);
  body(PRODSELECTOR).each((index, product) => {
    const price = body('.CellPrice_MainValue__3s0iP', product).text();
    const img = body('.Cell_Image__2-Jrs', product);
    products.push({
      id: index,
      title: product.attribs.title,
      price: price.split('R$ ')[1],
      permalink: `${URL}${product.attribs.href}`,
      thumbnail: img,
      original_price: '',
    });
  });
  return { results: products };
};

module.exports = { BPcategories, BPproducts };
