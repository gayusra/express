const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body-parser to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: false }));

// Route to display the product form
app.get('/add-product', (req, res, next) => {
    res.send('<h1>Add product</h1><form action="/store-product" method="POST"><input type="text" name="title"/><input type="submit" value="submit"/></form>');
});

// Route to handle form submission and send the response
app.post('/store-product', (req, res, next) => {
    // Sending a response with form data
    res.send(`<h1>Form data received</h1><p>Product title: ${req.body.title}</p>`);
});

// Start the server on port 8080
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
