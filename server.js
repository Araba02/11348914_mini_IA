const express = require('express');
const mongodb = require('mongodb');
const app = express();
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/medical_records'; // Replace with your MongoDB connection string
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.error('Failed to connect to the database:', err);
    return;
  }
  console.log('Connected to the database');

  // Start the server
  const port = 3000; // Replace with your desired port number
  app.listen(port, () => {
    console.log('Server is listening on port', port);
  });
});