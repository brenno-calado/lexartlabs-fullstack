const express = require('express');
require('dotenv').config();

const app = express();
const http = require('http').createServer(app);
const path = require('path');

const { getCategories } = require('./controllers/categories');
const { getSites } = require('./controllers/sites');

const dirname = path.resolve();

app.use(express.json());
app.use(express.static(path.join(dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', async (_req, res) => {
  const categories = await getCategories();
  const sites = getSites();
  res.status(200).render('index', { sites, categories });
});

const { PORT } = process.env;

http.listen(PORT || 3000, () => (
  console.log(`ouvindo na porta ${PORT || 3000}`)
));
