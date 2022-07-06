// import node module
const express = require('express');

// import own module
const router = require('./routes/router');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(router);

app.listen(port, () => {
    console.log(`Server running on port ${port}, http://localhost:${port}`);
});