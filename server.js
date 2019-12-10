'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// require('dotenv').config();

app.use(cors());

app.get('/', (request, response) => {
  response.send('What up, fam!');
});

app.listen(PORT, () => {
  console.log(`app running on PORT: ${PORT}`);
});
