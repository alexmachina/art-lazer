/* Module that represents the routing of default(Or Index) routes. */
var router = require('express').Router(),
	multer = require('multer'),
	upload = multer({dest : 'uploads/'}),
    userController = require('../controllers/userController');


router.get('/api/admin/users', userController.getUsers);
router.get('/api/admin/user/:username', userController.getUser);
router.post('/api/admin/user', upload.single('pictureFile'), userController.addUser);
router.put('/api/admin/user/:username',upload.single('pictureFile'), userController.updateUser);
router.post('/api/admin/user/login', userController.userLogin);

module.exports = router;

