const http = require('http');
const router = require ('./router/router');
http.createServer(router).listen(3000);
