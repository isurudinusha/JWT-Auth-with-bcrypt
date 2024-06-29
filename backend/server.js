const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/AuthRoutes');
const port = 5000;
app.use(express.json());
app.use(cors());
require('dotenv').config();



app.use(routes);

mongoose.
    connect(process.env.MONGODB_URL)
    .then(() => {
        // Log to console when successfully connected to MongoDB
        console.log('Connected to MongoDB');
    });

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
}
);