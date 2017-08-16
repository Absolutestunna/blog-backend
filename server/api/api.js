var router = require('express').Router();

router.use('/posts', require('./posts/postRoutes'));
router.use('/categories', require('./category/categoryRoutes'));
router.use('/user', require('./users/userRoutes'));

module.exports = router;