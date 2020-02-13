// Server is listening on port 80
const port = 80;

// Server will use these modules
const express = require('express');
const layouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

// setup app
const app = express();
app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.static('static'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('/', require('./routes/frontpage'));

app.listen(port, ()=> console.log(`🎧 on port ${port}`));