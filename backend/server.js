const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/AuthRoutes');
app.use(express.json());
app.use(cors());
require('dotenv').config();



app.use(routes);

mongoose.
    connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    });

app.listen(process.env.PORT || 5000, () => {
    console.log(`App listening on port ${port}`);
}
);