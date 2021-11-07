const axios = require('axios').default;

const URL = 'https://api.mercadolibre.com';
const SITE = '/sites/MLB';

export const categories = async () => (axios.get(`${URL}${SITE}/categories`)
  .then((response) => response.data).catch((error) => error.message)
);

export const sites = async () => (axios.get(`${URL}/sites`)
  .then((response) => response.data).catch((error) => error.message)
);
