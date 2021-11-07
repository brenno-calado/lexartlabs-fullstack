const axios = require('axios').default;

const URL = 'https://api.mercadolibre.com';
const SITE = '/sites/MLB';

const MLcategories = () => (axios.get(`${URL}${SITE}/categories`)
  .then((res) => res.data).catch((error) => error.data)
);

const sites = async () => (axios.get(`${URL}/sites`)
  .then((response) => response.data).catch((error) => error.message)
);

module.exports = { MLcategories, sites };
