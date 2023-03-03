const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./router');
const PORT = process.env.PORT || 3001;
const HOST = 'localhost';

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
console.log(`listening at http://${HOST}:${PORT}`)
console.log('hello')
});