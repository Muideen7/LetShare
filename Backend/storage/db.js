const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_CONNECTION_STRING;

class DBClient {
  constructor() {
    // store your connection string in your env to avoid conflicts
    this.client = new MongoClient(uri);
    try {
      this.client.connect();
      console.log('DATABASE CONNECTED SUCESSFULLY');
    } catch (err) {
      console.log(err);
    } finally {
      this.client.close();
    }

    this.db = this.client.db('Letshare');
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
