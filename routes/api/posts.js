const { getAllPosts, getPostById, create, getPostByAutorId } = require('../../models/post.model');

const router = require('express').Router();

// Crear un post.
router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
        const [post] = await getPostById(result.insertId);
        res.json(post[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// Obtener todos los post incluyendo los datos de sus autores.
router.get('/', async (req, res) => {
    try {
        const [posts] = await getAllPosts()
        res.json(posts)
    } catch (error) {
        res.status(500).json({ fatal: error.message })
    }
})



// Obtener un post por su id incluyendo los datos del autor.
router.get('/:postId', async (req, res) => {
    const { postId } = req.params;
    try {
        const [result] = await getPostById(postId);
        if (result.length === 0) {
            return res.json({ fatal: 'No existe un post con ese ID' })
        }
        res.json(result[0]);
    } catch (error) {
        res.json({ fatal: error.messaje });
    }

})


module.exports = router;