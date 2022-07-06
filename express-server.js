const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.headers);
    res.send('hello from server');
});

app.listen(4000, () => {
    console.log('server listen on http://localhost:4000');
});

