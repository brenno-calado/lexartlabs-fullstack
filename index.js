const express = require('express');

const app = express();
const http = require('http').createServer(app);
const path = require('path');

const dirname = path.resolve();

app.use(express.json());
app.use(express.static(path.join(dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (_req, res) => {

  res.status(200).render('index', { categories:  });
});

const { PORT } = process.env;

http.listen(PORT || 3000, () => console.log(`ouvindo na porta ${PORT || 3000}`));
