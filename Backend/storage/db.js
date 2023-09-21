/*
    module that configures the MongoClient instance
*/

const { MongoClient } = require('mongodb');

class DBClient {
    constructor() {
        // store your connection string in your env to avoid conflicts
        this.client = new MongoClient(process.env.MONGODB_CONNECTION_STRING)
        this.client.connect()
        this.db = this.client.db('letShare')
    }
}

const dbClient = new DBClient();
export default dbClient
