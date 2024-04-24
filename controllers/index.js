const router = require('express').Router();

const homeRoutes = require('./home-routes.js')
const commentRoutes = require('./comment-routes.js')
const postRoutes = require('./post-routes.js')

router.use('/', homeRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);

module.exports = router;