const http = require('http')
const url = require("url");

const hostname = '127.0.0.1';
const port = 3000;

function start(route, handle) {

    const server = http.createServer((req, res) => {
        const pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(handle, pathname, res, req);

    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

exports.start = start;