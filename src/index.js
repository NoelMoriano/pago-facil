const express = require('express');
const expbhs = require('express-handlebars');
const path = require('path');

//+INICIALIZACIÓN
const app = express();

//+SETTINGS
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expbhs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

//+MIDDLEWARE - como SUBIR DATOS
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//+ROUTES
//-importando archivo routes
app.use(require('./routes/index'));
//-static files
app.use(express.static(path.join(__dirname, 'public')));

//+START SERVIDOR
app.listen(3000, () => {
    console.log("Puerto de servidor", 3000);
});