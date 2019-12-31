const express = require('express');
const app = express();
const bodyParser=require('body-parser')
const morgan = require('morgan');


//routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));

// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());                             //permite al servidor entender formatos JSON


//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);

});