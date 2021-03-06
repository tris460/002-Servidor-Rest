require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('<h1>Bienvenido a mi servidor REST (local)</h1>');
});

app.use(require('./routes/usuario'));

mongoose.connect('mongodb://localhost:27017/cafeteria', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err, res) => {
    if(err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('El servidor está en línea en el puerto ', process.env.PORT);
});