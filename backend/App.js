const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Bento = require('./models/Bento');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// API Endpoints
app.get('/api/bento', async (req, res) => {
    try {
        const bentoList = await Bento.find();
        res.json(bentoList);
    } catch (error) {
        console.error('Error fetching bento grids:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/bento', async (req, res) => {
    const { name, description, category } = req.body;
    try {
        const newBento = new Bento({ name, description, category });
        await newBento.save();
        res.json(newBento);
    } catch (error) {
        console.error('Error creating bento grid:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Serve React App
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
