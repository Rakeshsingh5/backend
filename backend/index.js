require('dotenv').config();
const { configDotenv } = require('dotenv');
const express = require('express');
const app = express();
// const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter' , (req, res) =>{
    res.send('Hello from Twitter!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});