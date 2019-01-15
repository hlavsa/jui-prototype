const express = require('express');
const router  = express.Router();

router.use('/', require('./routes/core'));
router.use('/', require('./routes/pip'));
router.use('/', require('./routes/divorce'));
router.use('/', require('./routes/fr'));
router.use('/', require('./routes/questions'));
router.use('/', require('./routes/directions'));
router.use('/', require('./routes/linked-cases'));

router.get('/', function (req, res) {
	req.session.destroy();
	res.redirect('/app/dashboard');
});

module.exports = router;
