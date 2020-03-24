const express = require( 'express' );
const cors = require( 'cors' );
const routes = require( './routes' );

const app = express();

app.use( cors( {
    origin: 'http://localhost:3333'
} ) );
app.use( express.json() );
app.use( routes );

app.listen( 3333 );

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: buscar uma informação no backend
 * POST: criar uma informação no backend
 * PUT: alterar uma informação no backend
 * DELETE: deletar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: parâmetros utilizados para identificar recursos (/users/:id)
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB
 */

/**
 * Driver: SELECT * FROM users => query difere em cada bando SQL
 * Query Builder: table('users).select('*').whrere() => universal com todos os SQL
 */