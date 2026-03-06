const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/sample', (req, res) => {
  res.json({ message: 'This is a sample endpoint', data: [1, 2, 3] });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});