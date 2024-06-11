const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://localhost/inventory', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(cors());
app.use(express.json());

const productsRouter = require('./routes/products');
app.use('/api/products', productsRouter);

app.listen(3000, () => console.log('Server Started'));