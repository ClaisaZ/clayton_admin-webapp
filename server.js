const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express! Render is deploysed yes.');
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/crash', (req, res) => {
    throw new Error('Simulated crash');
});

app.get('/version', (req, res) => {
    res.send(`App version: ${process.env.APP_VERSION || 'unset'}`);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
