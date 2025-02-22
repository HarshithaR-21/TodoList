// const {MongoClient} = require('mongodb');
// require('dotenv').config();
// const client = new MongoClient(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const dbConnection = async () => {
//     await client.connect()
//     let db = client.db('TodoList');
//     return db;
// }

// module.exports = {dbConnection}
const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URL);

const dbConnection = async () => {
    try {
        await client.connect();
        console.log("✅ MongoDB Connected Successfully!");
        return client.db('TodoList'); // Ensure the correct DB name
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        throw error; // Propagate error to catch it in routes
    }
};

module.exports = { dbConnection };
