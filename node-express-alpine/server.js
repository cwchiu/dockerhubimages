const express = require('express');

// Constants
const PORT = process.env['SERVER_PORT'] || 5050;

// App
const app = express();
app.get('/', function (req, res) {
 res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
