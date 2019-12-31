const {Router} = require('express');
const router= Router();
const movies= require('./ejemplo.json');

//console.log(movies);

router.get('/',(req,res)=>{
   res.json(movies);
});

router.post('/',(req,res)=>{
  console.log(req.body);
  
  /*const {Id, director, Titulo, Año, genero, rating }=req.body;
  if (Id && director && Titulo && Año && genero && rating){
     res.send("saved")
  };*/
 res.send('Recibido con exito');
});

module.exports= router;