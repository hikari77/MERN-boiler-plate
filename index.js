const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bosco:20070107hg@mern-boiler-plate.iq214.mongodb.net/MERN-boiler-plate?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    })
    .then(()=> {
        console.log(' DB connected')
    })
    .catch(err => console.error(err))


    
app.get('/', (req, res) => {
    res.send('hello from express')
});



app.listen(5000);

