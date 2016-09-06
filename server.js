var path = require('path');
var express = require('express');

var port = (process.env.PORT || 8080);


var app = express();
var indexPath = path.join(__dirname, 'index.html');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (_, res) {
    res.sendFile(indexPath);
});


app.listen(port);
console.log('Listening at port:' + port);