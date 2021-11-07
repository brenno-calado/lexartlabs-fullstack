const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://mongodb:27017';
const DB_NAME = 'LexartLabs';

const connection = () => (
  MongoClient.connect(process.env.MONGO_DB_URL || MONGO_DB_URL, OPTIONS)
    .then((conn) => conn.db(DB_NAME))
);

module.exports = connection;
