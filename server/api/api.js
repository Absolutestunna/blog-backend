var router = require('express').Router();

router.use('/users', require('./users/userRoutes'));
router.use('/categories', require('./category/categoryRoutes'));
router.use('/posts', require('./posts/postRoutes'));


module.exports = router;