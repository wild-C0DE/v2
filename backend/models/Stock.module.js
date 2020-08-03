const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stockSchema = new Schema({
	name : {type: String, required: true, trim: true}, 
	reference : {type: String, required: true, trim: true}, 
	quantity : {type: Number, required: true, trim: true}, 
	price : {type: Number, required: true}, 
	security : {type: Number, required: true}, 
	min : {type: Number}, 
	max : {type: Number}, 
}, {
	timestamps: true
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;