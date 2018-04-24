const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

//serve the bundle.js file that we created when we ran npm run postinstall
app.use(express.static(__dirname));

// if it cant find it then just send index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port);
console.log('Server Started on port:', port);
