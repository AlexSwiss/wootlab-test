const express = require('express');
const bodyParser = require('body-parser');

const app = express();

port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));