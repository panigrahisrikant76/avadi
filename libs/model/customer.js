var mongoose = require('mongoose'),
	Schema = mongoose.Schema,

	Customer = new Schema({
		customerName: {
			type: String,
			unique: true,
			required: true
		},
		contactId: {
			type: String,
			unique: false,
			required: false
		},
		subscriptionId: {
			type: String,
			required: false
		},
		created: {
			type: Date,
			default: Date.now
		}
	});

module.exports = mongoose.model('Customer', Customer);
