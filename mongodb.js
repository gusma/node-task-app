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
			return console.log("Theres an error! Unable to connect to DB");
		}
		const db = client.db(databaseName);

		db.collection("users")
			.updateMany({ completed: true }, { $set: { completed: false } })
			.then((result) => {
				console.log(result.modifiedCount);
			})
			.catch((error) => {
				console.log(error);
			});

		// db.collection('users')
		// 	.updateOne(
		// 		{ _id: new ObjectID('5f3df5d1842bf102a32becad') },
		// 		{ $set: { description: 'Buy Bananas' } }
		// 	)
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		// Read Functions
		// db.collection('users').findOne(
		// 	{ _id: new ObjectID('5f3df5d1842bf102a32becad') },
		// 	(error, user) => {
		// 		if (error) {
		// 			return console.log('There's been an error');
		// 		} else if (user === null) {
		// 			return console.log('No users available');
		// 		}
		// 		console.log(user);
		// 	}
		// );

		// db.collection('users')
		// 	.find({ completed: false })
		// 	.toArray((error, users) => {
		// 		if (error) {
		// 			console.log('There's been an error');
		// 		}
		// 		console.log(users);
		// 	});

		// ADD FUNCTIONS
		// Adds an individual instance
		//
		// db.collection('users').insertOne(
		// 	{
		// 		_id: id,
		// 		name: 'Gustavo',
		// 		age: 37,
		// 	},
		// 	(error, result) => {
		// 		if (error) {
		// 			console.log('Failed!');
		// 		}
		// 		console.log(result.ops);
		// 	}
		// );

		// Adds multiple instances
		// db.collection('users').insertMany(
		// 	[
		// 		{ description: 'Do your dishes', completed: true },
		// 		{ description: 'Take a bath', completed: false },
		// 		{ description: 'Do your homework', completed: true },
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Failed to insert!');
		// 		}
		// 		console.log(result.ops);
		// 	}
		// );
	}
);
