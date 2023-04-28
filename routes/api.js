const router = require('express').Router();

//ENLAZAMOS API.JS CON EL DIRECTORIO /API/
//Todas las peticiones que llegan hasta aqui ya son /api, y las manda al directorio /api/autores o post.
router.use('/autores', require('./api/autores.js'));
router.use('/posts', require('./api/posts.js'));


module.exports = router;