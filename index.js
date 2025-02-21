const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// POST endpoint
app.post('/api/bfhl', (req, res) => {
    const { data } = req.body;
    
    // Separate numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));
    const highest_alphabet = alphabets.length > 0 
        ? [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)]
        : [];

    res.json({
        is_success: true,
        user_id: "Simar_Khurana_15092004",
        email: "22BCS16200@cuchd.in",
        roll_number: "22BCS16200",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highest_alphabet
    });
});

// GET endpoint
app.get('/api/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

// Export the Express API
module.exports = app;