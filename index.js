require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const app = express();
const port = 3000;
const url = process.env.MONGODB_URL;


mongoose.connect(url).then(() => {
    console.log('connected to mongodb');
}).catch(err => console.error(err));




app.use(express.json());
app.use('/api/auth', authRoutes)

app.listen(port, () => {
    console.log(`Server running on localhost ${port}`);
});
