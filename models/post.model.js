const create = ({ titulo, descripcion, fecha_creacion, categoria, autor_id }) => {
    return db.query('insert into profesores (titulo, descripcion, fecha_creacion, categoria, autor_id) values (?,?,?,?,?)',
        [titulo, descripcion, fecha_creacion, categoria, autor_id]);
}



// Obtener todos los posts con los datos del autor.
const getAllPosts = () => {
    return db.query(`
    SELECT posts.*, autores.nombre as nombreAutor, autores.email as emailAutor, autores.imagen as imagenAutor
    FROM posts
    INNER JOIN autores ON posts.autor_id = autores.id
  `);
}



// Obtener un post por su id con los datos del autor
const getPostById = () => {
    return db.query(`
    SELECT posts.*, autores.nombre as nombreAutor, autores.email as emailAutor, autores.imagen as imagenAutor
    FROM posts
    INNER JOIN autores ON posts.autor_id = autores.id
    WHERE posts.id = ?
  `, [postId]);
}


//Cada post recuperado debería ir acompañado de todos los datos del autor y no solo del identificador que lo define.
//Se debe definir una url que nos permita recuperar los diferentes posts escritos por un autor en concreto.
const getPostByAutorId = () => {
    return db.query(`
    SELECT posts.*, autores.nombre as nombreAutor, autores.email as emailAutor, autores.imagen as imagenAutor
    FROM posts
    INNER JOIN autores ON posts.autor_id = autores.id
    WHERE autores.id = ?
  `, [postId]);
}

module.exports = {
    create, getAllPosts, getPostById, getPostByAutorId
}