//index.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5007;
app.use(cors());

/*
mongoose.connect('mongodb+srv://<username>:<password>@mycluster.crwb89k.mongodb.net
    /?retryWrites=true&w=majority&appName=mycluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
*/
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});