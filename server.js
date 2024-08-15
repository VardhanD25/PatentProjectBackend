require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const elementRoutes = require('./routes/element');
const partRoutes = require('./routes/part');
const userRoutes = require('./routes/user');
const standardAlloyRoutes=require('./routes/standardAlloy')
const app = express();

// Middleware
app.use(express.json());
app.use(cors());  // Enable CORS

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/elements', elementRoutes);
app.use('/parts', partRoutes);
app.use('/user', userRoutes);
app.use('/standardAlloy',standardAlloyRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Database connection and server start
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    app.listen(process.env.PORT || 4000, () => {
      console.log(`Listening on port ${process.env.PORT || 4000}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1); // Exit process with failure
  }
};

startServer();
