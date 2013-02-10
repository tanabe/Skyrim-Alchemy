(function() {
  var server = require('webserver').create();
  var service = server.listen(9876, function (request, response) {
      var fs = require('fs');
      var file = fs.read(fs.workingDirectory + request.url);
      response.statusCode = 200;
      response.headers['Content-Type'] = 'text/html';
      response.write(file);
      response.close();
  });
 
  var page = require('webpage').create();
  page.onConsoleMessage = function(message) {
      console.log(message);
  };
  page.open('http://localhost:9876/source.html', function(status) {
      console.log(page.content);
      phantom.exit();
  });
})();
