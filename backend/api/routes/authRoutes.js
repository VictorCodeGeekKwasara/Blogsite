const { Router } = require('express');
const router = Router();
const { create_user, login } = require('../controllers/authController');

router.post('/createuser', create_user);
router.post('/login', login);

module.exports = router;
