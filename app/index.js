const express = require('express');
const app = express();
const PORT = 3003;

app.get('/', (req, res) => {
    res.send('Hello from DevOps Project!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

