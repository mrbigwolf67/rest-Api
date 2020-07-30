const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


// MIDDLEWARES
// app.use('/posts', () => {
//     console.log('This is a middleware running');
// })
// app.use(auth); 

// ROUTES 
app.get('/', (req, res ) => {
    res.send('We are on startPage');
})

app.get('/home', (req, res ) => {
    res.send('We are on Home Page');
})

app.get('/posts', (req, res ) => {
    res.send('We are on posts');
})

// CONNECT TO DB 
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
        () => console.log('Connected to DB !!'));


app.listen(3000);