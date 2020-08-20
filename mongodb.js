const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id);

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(error, client) => {
		if (error) {
			return console.log("There's an error! Unable to connect to DB");
		}
		const db = client.db(databaseName);

		// Adds an individual instance
		//
		// db.collection("users").insertOne(
		// 	{
		// 		_id: id,
		// 		name: "Gustavo",
		// 		age: 37,
		// 	},
		// 	(error, result) => {
		// 		if (error) {
		// 			console.log("Failed!");
		// 		}
		// 		console.log(result.ops);
		// 	}
		// );

		// Adds multiple instances
		// db.collection("users").insertMany(
		// 	[
		// 		{ description: "Do your dishes", completed: true },
		// 		{ description: "Take a bath", completed: false },
		// 		{ description: "Do your homework", completed: true },
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log("Failed to insert!");
		// 		}
		// 		console.log(result.ops);
		// 	}
		// );
	}
);
