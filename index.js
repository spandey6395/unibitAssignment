const express = require('express');
const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

// Create Express app
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://spandey6395:R43s8If0R4EpfraA@cluster0.mknlo.mongodb.net/Saurabh56790", { useNewUrlParser: true })
    .then(() => console.log("mongoDB is Connected!!!"))
    .catch(err => console.log(err))

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tickets', ticketRoutes);


// Start the server
app.listen(process.env.PORT||3000, function() {
    console.log('Express app running on port: ' ,process.env.PORT||3000)
});