const express = require('express');
const connectdb = require('./config/db');

const app = express();

//connect database
connectdb();

app.get('/', (req, res) => res.send(`API is running`));

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    `Server running at port ${PORT}`
})