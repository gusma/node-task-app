const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is invalid');
			}
		},
	},
	password: {
		type: String,
		required: true,
		minlength: 7,
		trim: true,
		validate(value) {
			if (value.includes('password')) {
				throw new Error('Password cannot contain the word password');
			}
		},
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error('Age must be a postive number');
			}
		},
	},
});

const me = new User({
	name: 'Gustavo Malamud',
	email: 'gustavo.malamud@gmail.com   ',
	password: 'revolvers',
});

me.save()
	.then(() => {
		console.log(me);
	})
	.catch((error) => {
		console.log('Error!', error);
	});

const Task = mongoose.model('Task', {
	task: {
		type: String,
		required: true,
		trim: true,
	},
	completed: {
		type: Boolean,
		enum: ['true', 'false'],
		default: false,
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
