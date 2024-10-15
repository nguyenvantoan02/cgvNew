const express = require('express');
const app = express();
const port = 2002;
const path = require('path');

const routes = require('./routes/index');
routes(app);
const { engine } = require('express-handlebars');
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.render('index');
});
app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
