const express = require("express")
var app = express()
var path = require('path');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


// Index route
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/views/main.html')));


app.listen(10000, function () {
    console.log("Started application on port %d", 10000)
});