const express = require("express");

const router = express.Router();

const RatioTable = require("../../models/historyChart/ratiochart");

router.get('/', (req, res) => {
	RatioTable.find({})
	.then(data =>{
		let array = []
		for(let i = 0 ; i<data.length;i++){
			array.push(data[i].ratio1)
		}	
		res.json(array)
	})
	.catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', (req, res) => {
	RatioTable.create(req.body)
	.then(() => res.json('data saved successfuly'))
	.catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;