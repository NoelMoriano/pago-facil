//ROUTES
const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/', (req, res) => {
    res.render('checkout_success');
});

module.exports = router;