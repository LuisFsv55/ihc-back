require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// ===__********** Middlewares   **********__===
app.use(  express.json()  );
app.use( bodyParser.json() );
app.use( cors() );
app.use( bodyParser.urlencoded({ extended: false }) );

// ===__********** Rutas  **********__===
app.use( '/',  require('./routes/inicio.routes') );
app.listen( process.env.PORT, () => {
    console.log(`Servidor Iniciando en puerto ${ process.env.PORT }`);
})