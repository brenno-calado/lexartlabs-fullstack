const express = require('express');
require('dotenv').config();

const app = express();
const http = require('http').createServer(app);
const path = require('path');

const { getCategories } = require('./controllers/categories');
const { getSites } = require('./controllers/sites');
const { handleSearch } = require('./controllers/products');

const dirname = path.resolve();

app.use(express.json());
app.use(express.static(path.join(dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', async (req, res) => {
  const categories = await getCategories();
  const sites = getSites();
  const products = await handleSearch(req);
  res.status(200).render('index', { sites, categories, products });
});

const { PORT } = process.env;

http.listen(PORT || 3000);
