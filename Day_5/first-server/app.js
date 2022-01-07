const express = require('express');

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  next();
});

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
