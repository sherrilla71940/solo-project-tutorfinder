const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const router = require('./router');
const PORT = process.env.PORT, HOST = process.env.HOST;

app.use(cors({
  "AllowedOrigins": [
    `http://${HOST}:${PORT}`,
    `http://${HOST}:3000`
]
}));

// seems like above cors is not necessary if using same host and http protocol

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
console.log(`listening at http://${HOST}:${PORT}`)
});