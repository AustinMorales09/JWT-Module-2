const {Router} = require('express')
const authController = require('../controllers/authControllers.js')
const router = Router();

//get & post for signup
router.get('/signup', authController.signup_get)
router.post('/signup', authController.signup_post)

//get & post for login
router.get('/login', authController.login_get)
router.post('/login', authController.login_post)

module.exports = router;