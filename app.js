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
<<<<<<< HEAD
// const DB_URL = 'mongodb://127.0.0.1:27017/healthcare';
const DB_URL = "mongodb+srv://fatimaumer107:SdIvTIlERFAk9RDH@cluster0.sjhyz.mongodb.net/healthDB?retryWrites=true&w=majority&appName=Cluster0";
=======
// const DB_URL = process.env.DB_URL || 'mongodb://mongo:27017/healthcare';
const DB_URL = process.env.MONGO_URI || "mongodb+srv://fatimaumer107:5e4ZzPFmupQxsJfj@cluster0.sjhyz.mongodb.net/healthapp?retryWrites=true&w=majority&appName=Cluster0";
>>>>>>> d215d02553de1d6c8caf3b2cfdffdf89c01cc78f

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
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
// Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
