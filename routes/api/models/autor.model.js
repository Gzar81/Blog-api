const create = ({ nombre, email, imagen }) => {
    return db.query('insert into profesores (nombre, email, imagen) values (?,?,?)',
        [nombre, email, imagen]);
}

//Recupera un listado con todos los autores
const getAllAutors = () => {
    return db.query('select * from autores')
}

//Recupera un autor por su id
const getAutorById = () => {
    return db.query(`
    SELECT *
    FROM autores
    WHERE id = ?
  `, [autorId]);
}

module.exports = {
    getAllAutors, getAutorById
}

