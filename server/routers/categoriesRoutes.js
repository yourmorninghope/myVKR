const Router = require('express');
const router = new Router();
const categoriesController = require('../controllers/categoriesControllers');

router.get('/', categoriesController.getAll);
// router.post('/getCharacteristics', categoriesController.getCharacteristics);

module.exports = router;