const express = require('express');
const app = express();
const port = 3000;

const blog = require('./routes/blog');

app.use(express.static("public"));

app.use('/blog', blog);

app.get('/', (req, res) => {
    console.log("Its a get request");
    res.send('Hello Worlddd!');
});

app.post('/', (req, res) => {
    console.log("Its a post request");
    res.send('Hello Worlddd Post!');
}).put('/', (req, res) => {
    console.log("Its a put request");
    res.send('Hello Worlddd put!');
});

app.delete('/', (req, res) => {
    console.log("Its a Delete request");
    res.send('Hello Worlddd Delete!');
});

app.get('/index', (req, res) => {
    console.log("This is index");
    res.sendFile("/templates/index.html", {root: __dirname});
});

app.get('/api', (req, res) => {
    res.json({a: 1, b: 2, c: 3});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});