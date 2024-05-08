const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
require('./database/collections/contractorUsers');
const ContractorUser = require('./api/contractorRoutes');

const app = express();


const PORT = process.env.PORT || 8000;
const DATABASE = process.env.MONGODB_URI;

// middleware
app.use(express.json());
app.use(cors());

// connect to database
mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));


// routes
app.get('/', (req, res) => {
    res.send('Hello World');
    });


//routes
app.use('/api', ContractorUser);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});