const connection = require('./connection');

const create = async (site, category, search, products) => (
  connection()
    .then(
      (db) => db.collection('products').insertOne(
        {
          site,
          category,
          search,
          products,
        },
      ),
    )
);

const findOne = async (site, category, search) => (
  connection()
    .then(
      (db) => db.collection('products').findOne(
        { site, category, search }, { _id: 0 },
      ),
    )
);

const Products = {
  ML: {},
  BP: {},
};

module.exports = { create, findOne, Products };
