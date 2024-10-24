const express = require ('express');
const app = express();
const port = 3000;

// =======

const {persegi, luasPersegi} = require ('./moduls/index.js');

app.get('/persegi/:number', (req,res) => {
    res.send(`sisi persegi : ${req.params.number} luas persegi : ${luasPersegi(req.params.number)}`)
})


// =========

app.get('/',(req,res) => {
    res.send('hello')
});

app.listen(port,() => {
    console.log(`server berjalan di port : ${port}`)
});

app.get('/about', (req,res) => {
    res.send('about')
});