var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic(__dirname + '/builds'));
app.use(serveStatic(__dirname + '/public', {'index':['index.html', 'index']}));
app.listen(3000);
