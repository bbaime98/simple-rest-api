const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/users', userRoutes);

app.use((err, req, res, next) => {
  console.error("Error: ", err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;