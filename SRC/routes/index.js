//Routes
const  {Router} = require('express');
const  router = Router();  


router.get('/',(req , res) =>{
    const data={
                "Genero": "accion",
                "Duracion": "130min", 
                "Tiulo":"Iroman"

    }
    res.json(data);
 });
 module.exports = router;