import pkg from "mongodb";
const { MongoClient } = pkg;
import secrets from "./secrets.js";

const client = new MongoClient(secrets.databaseConfig.connectionUri);

async function connectToMongoDB() {
	try {
		// Connect the client to the server
		await client.connect();
		// Establish and verify connection
		await client.db("admin").command({ ping: 1 });
		console.log("Connected successfully to server");
	} catch (err) {
		console.error("MongoDB connection error: ", err);
		throw err; // Re-throw the error after logging
	}
}

connectToMongoDB().catch(console.dir);

export { client };
