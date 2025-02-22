const {MongoClient} = require('mongodb');
require('dotenv').config();
const client = new MongoClient(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const dbConnection = async () => {
    await client.connect()
    let db = client.db('TodoList');
    return db;
}

module.exports = {dbConnection}