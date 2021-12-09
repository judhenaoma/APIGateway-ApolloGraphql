//Se llama al typedef (esquema) de cada submodulo
const userTypeDefs = require('./user_type_defs');
const inmuebleTypeDefs = require('./inmueble_type_defs');
const reviewTypeDefs = require('./review_type_defs');

//Se unen
const schemasArrays = [userTypeDefs, inmuebleTypeDefs, reviewTypeDefs];

//Se exportan
module.exports = schemasArrays;