const Router = require('express');
const router = new Router();
const userController = require('../controllers/userControllers');
const authMiddleware = require('../middleware/checkAuth');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/refresh', userController.refresh);
router.post('/logout', userController.logout)
router.get('/authOnly', authMiddleware,  userController.checkAuth)

module.exports = router;