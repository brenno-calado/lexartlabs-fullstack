const connection = require('./connection');

const create = async (site, categories) => (
  connection()
    .then(
      (db) => db.collection('categories').insertOne(
        { site, categories },
      ),
    )
);

const findOne = async (site) => (
  connection()
    .then(
      (db) => db.collection('categories').findOne({ site }, { _id: 0 }),
    )
);

const Categories = {
  ML: '',
  BP: '',
};

module.exports = { create, findOne, Categories };
