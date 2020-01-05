const express = require('express');
const app = express();

const path = require('path');
const port = process.env.PORT || 8000;

// Import routes
const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);
app.use('/u', usersRoute);

app.listen(port, () => console.log(`[SERVER] Started on: http://localhost:${port}`));