const { Router } = require('express');
const router = Router();
const {
	getblogs,
	createblog,
	getblog,
} = require('../controllers/blogsController');

router.get('/blogs', getblogs);
router.get('/blog/:id', getblog);
router.post('/createblog', createblog);

module.exports = router;
