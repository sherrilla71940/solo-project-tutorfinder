const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./router');
const PORT = process.env.PORT, HOST = process.env.HOST;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
console.log(`listening at http://${HOST}:${PORT}`)
});