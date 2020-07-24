const router = require('express').Router();

router.post('/login', (req, res) => {
	res.send('sent')
});


module.exports = router;