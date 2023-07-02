const Router = require('express');
const router = new Router();
const sellerController = require('../controllers/sellerControllers');

router.post('/registration', sellerController.registration);
router.post('/items', sellerController.getItems);

module.exports = router;