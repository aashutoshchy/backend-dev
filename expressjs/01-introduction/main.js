const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Make 'Public' folder and put the files that you want the users to see them.

app.get('/', (req, res) => {
    res.send('Namaste World!');
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});

app.get('/address', (req, res) => {
    res.send('This is Address Page');
});

app.get('/blog', (req, res) => {
    res.send('This is Blog Page');
});

app.get('/blog/:slug', (req, res) => {
    res.send(`Introduction to ${req.params.slug}`);
});

// app.get('/blog/javascript', (req, res) => {
//   res.send('Introduction of JavaScript');
// });

// app.get('/blog/python', (req, res) => {
//   res.send('Introduction of Python');
// });


app.get('/contact', (req, res) => {
    res.send('This is Contact Page');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});