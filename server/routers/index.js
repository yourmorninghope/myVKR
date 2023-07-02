const Router = require('express');
const router = new Router();

const userRoutes = require('./userRoutes');
const sellerRoutes = require('./sellerRoutes');
const itemRoutes = require('./itemRoutes');
const categoriesRoutes = require('./categoriesRoutes');

router.use('/user', userRoutes);
router.use('/seller', sellerRoutes);
router.use('/item', itemRoutes);
router.use('/categories', categoriesRoutes);

module.exports = router;