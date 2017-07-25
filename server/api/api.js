var router = require('express').Router();

router.use('/posts', require('./posts/postRoutes'))

module.exports = router;
