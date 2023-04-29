const { getAllAutors, getAutorById, create } = require('../../models/autor.model');
const { getPostByAutorId } = require('../../models/post.model');

const router = require('express').Router();

// Crear un autor.
router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
        const [newAutor] = await getAutorById(result.insertId);
        res.json(newAutor[0]);
    } catch (error) {
        res.status(500).json({ fatal: error.message })
    }

})

// Obtener todos los autores.
router.get('/', async (req, res) => {
    try {
        const [autores] = await getAllAutors()
        res.json(autores)
    } catch (error) {
        res.status(500).json({ fatal: error.message })
    }
})

// Obtener un autor por su id con todos sus posts.
router.get('/posts/:autorId', async (req, res) => {
    try {
        const { autorId } = req.params;
        const [posts] = await getPostByAutorId(autorId)
        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener los posts del autor' });
    }
});

// Obtener un autor por su id.
router.get('/:autorId', async (req, res) => {
    const { autorId } = req.params;
    try {
        const [result] = await getAutorById(autorId);
        if (result.length === 0) {
            return res.json({ fatal: 'No existe un autor con ese ID' })
        }
        res.json(result[0]);
    } catch (error) {
        res.json({ fatal: error.messaje });
    }

})


module.exports = router;