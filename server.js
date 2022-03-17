const express = require ('express');
const path = require('path');

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('api/notes', api);

//set static folder//
app.use(express.static(path.join(__dirname, 'public', 'index.html')));

const PORT = process.env.PORT || 5003
 

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));

