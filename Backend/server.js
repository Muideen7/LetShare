/*
    Module that sets up the express server
*/
import router from './routes/index';

const express = require('express');

const app = express();
const host = '0.0.0.0';
const port = '5000';

// use router middleware
app.use('/', router);

app.listen(port, host, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
