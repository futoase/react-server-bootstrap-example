var http = require('http'),
    ECT = require('ect'),
    browserify = require('browserify'),
    literalify = require('literalify');

var renderer = ECT({ root: __dirname + '/templates' });

http.createServer(function(req, res) {

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.end(renderer.render('index.ect'));

  } else if (req.url === '/dest/bundle.js') {
    res.setHeader('Content-Type', 'text/javascript');
    browserify()
      .require('./dest/app.js', {expose: 'App'})
      .transform({global: true}, literalify.configure({react: 'window.React'}))
      .bundle()
      .pipe(res);

  } else {
    res.statusCode = 404;
    res.end();
  }
}).listen(3000, function(err) {
  if (err) {
    throw err;
  }
  console.log('Listening on 3000...');
});
