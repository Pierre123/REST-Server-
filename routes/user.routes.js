const { Router } = require('express'); //peticiones y otras cosas
const {
    usersGet,
    usersPost,
    usersPatch,
    usersPut,
    usersDelete
} = require('../controllers/users.controllers');

const router = Router();

router.get('/', usersGet);

router.patch('/', usersPatch);

router.post('/', usersPost);

router.put('/:userId', usersPut);

router.delete('/', usersDelete);

module.exports = router;