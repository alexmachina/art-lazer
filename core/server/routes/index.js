/* Module that represents the routing of default(Or Index) routes. */
var router = require('express').Router(),
	multer = require('multer'),
    userController = require('../controllers/userController');


router.get('/api/admin/users', userController.getUsers);
router.get('/api/admin/user/:username', userController.getUser);
router.post('/api/admin/user', userController.addUser);
router.put('/api/admin/user/:username', userController.updateUser);
router.post('/api/admin/user/login', userController.userLogin);

module.exports = router;

