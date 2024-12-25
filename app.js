const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Connect to Database
// const DB_URL = 'mongodb://127.0.0.1:27017/healthcare';
const DB_URL = "mongodb+srv://fatimaumer107:SdIvTIlERFAk9RDH@cluster0.sjhyz.mongodb.net/healthDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB_URL)
  .then(() => {
    console.log('MongoDB connected', DB_URL);
  })
  .catch(err => {
    console.error('Database connection failed:', err.message);
  });

// Import Routes
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const reportRoutes = require('./routes/reportRoutes');

// Home Route (Add this)
app.get('/', (req, res) => {
  res.render('index'); // Ensure 'index.hbs' exists in the 'views' folder
});

// Use Routes
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/reports', reportRoutes);


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
