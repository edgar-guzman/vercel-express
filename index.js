const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Home Page Route');
});

app.get('/about', (req, res) => {
    res.send('About Page Route');
});

app.get('/portfolio', (req, res) => {
    res.send('Portfolio Page Route');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page Route');
});

app.listen(PORT, () => {
    console.log(`Express Server running on http://localhost:${PORT}`)
})