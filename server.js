const express = require ('express');
const path = require('path');
const db = require('./db/db.json');
const fs = require('fs');


const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
// app.use('api/notes', api);

//set static folder//
app.use(express.static(path.join(__dirname, 'public', 'index.html')));

app.get('/notes', (req, res)=>{
res.sendFile(path.join(__dirname, '/public', '/notes.html'))
});

app.get('/api/notes', (req, res)=>{
res.json(db)
});

app.post('/api/notes', (req, res)=>{
    const note=req.body
    db.push(note)
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.json()
});

const PORT = process.env.PORT || 5003
 

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));

