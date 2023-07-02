const Router = require('express');
const router = new Router();
const itemController = require('../controllers/itemControllers');

router.post('/save', itemController.saveItem);
router.put('/edit:id', itemController.edit);
router.get('/:id', itemController.getOne);
router.get('/:category', itemController.getAllByCategory);

module.exports = router;