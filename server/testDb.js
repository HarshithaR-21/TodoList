const { dbConnection } = require("./model/dbConnection");


(async () => {
    try {
        let db = await dbConnection()
        console.log("Database Connection Successful!");
        process.exit(0);
    } catch (error) {
        console.error("Database Connection Failed:", error);
        process.exit(1);
    }
})();
