const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const Task = mongoose.model('Task', {
	task: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		required: true,
		enum: ['true', 'false'],
	},
});

const task = new Task({ task: 'Buy floor cleanse', completed: true });

task
	.save()
	.then((task) => {
		console.log(task);
	})
	.catch((error) => {
		console.log('Error', error);
	});
