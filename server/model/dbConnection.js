const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url);

const dbConnection = async () => {
    await client.connect()
    let db = client.db('TodoList');
    return db;
}

module.exports = {dbConnection}