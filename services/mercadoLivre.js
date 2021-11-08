const axios = require('axios').default;

const URL = 'https://api.mercadolibre.com';
const SITE = '/sites/MLB';

const MLcategories = () => (axios.get(`${URL}${SITE}/categories`)
  .then((res) => res.data).catch((error) => error.data)
);

const MLsites = async () => (axios.get(`${URL}/sites`)
  .then((response) => response.data).catch((error) => error.data)
);

const MLproducts = async (category, search) => (
  axios.get(`${URL}${SITE}/search?category=${category}&q=${search}`)
    .then((response) => response.data).catch((error) => error.data)
);

module.exports = { MLcategories, MLsites, MLproducts };
