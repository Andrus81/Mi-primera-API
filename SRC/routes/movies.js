const {Router} = require('express');
const router= Router();
const movies= require('./ejemplo.json');
console.log(movies);


router.get('/',(req,res)=>{
   res.send('movies');
});

module.exports= router;