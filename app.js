// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const goodsRoutes = require('./routes/goods');

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/marketplace')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/goods', goodsRoutes);

// Serve static files
app.use(express.static('public'));

// View engine setup
app.set('view engine', 'ejs');

// Home route
app.get('/', (req, res) => {
  res.render('index');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port 3000`));
