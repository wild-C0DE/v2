const router = require('express').Router();
let Stock = require('../models/Stock.module');

router.get('/', (req, res) => {
	Stock.find()
	.then(stocks => res.json(stocks))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', (req, res) => {
	const tool = req.body.tool
	const name = req.body.name
	const reference = req.body.reference;
	const quantity = req.body.quantity;
	const security = req.body.security;
	const price = req.body.price;
	const min = req.body.min;
	const max = req.body.max;
	const lifetime = req.body.lifetime
	

	const newStock = new Stock({
		tool,
		name,
		reference,
		quantity,
		price,
		security,	
		min,
		max,
		lifetime
	});
	newStock.save()
	.then(() => res.json('stock added!!'))
	.catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;