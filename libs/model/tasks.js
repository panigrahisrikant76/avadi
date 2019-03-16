var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Tasks = new Schema({
	title: { type: String, required: true },
	assigned_to: { type: Number, required: true },
	description: { type: String, required: true },
	modified: { type: Date, default: Date.now }
});

Tasks.path('title').validate(function (v) {
	return v.length > 5 && v.length < 70;
});

module.exports = mongoose.model('Tasks', Tasks);