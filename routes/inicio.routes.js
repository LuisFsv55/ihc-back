const { Router } = require('express');
const { sendDialogFlow } = require('../controllers/mensaje.controller');

const router = Router();

// Inicio de la APP
router.post( '/', sendDialogFlow );
router.get('/', (req,res) => {
    res.send('Bievenido1');
})

// Prueba Unitarias
router.post( '/prueba', async( req, res ) => {
    const { address } = req.body;
    // let respuesta = await sendDialogFlow( 123 , message );
    console.log( JSON.parse( address ) );
    res.json({ address });
});

module.exports = router;