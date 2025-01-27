// This code creates a server that listens on port 3000.
var http = require('http');
http.createServer(
    function(req, res) 
    {
        res.end('Hello World!');
    }
                    ).listen(3000);


console.log('Server running on port 3000');