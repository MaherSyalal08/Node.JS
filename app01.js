const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    if (pathname.startsWith('/public/')) {
        const fileLocation = path.join(__dirname, pathname);
        const extname = path.extname(fileLocation);
        
        let contentType = 'text/html';
        if (extname === '.css') contentType = 'text/css';
        if (extname === '.js') contentType = 'text/javascript';

        fs.readFile(fileLocation, (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/html" });
                return res.end("404 Not Found</h1>");
            }
            
            res.writeHead(200, { "Content-Type": contentType });
            res.write(data);
            return res.end();
        });

        return; 
    }

    let fileLocation;
    switch (pathname) {
        case '/':
        case '/form-mahasiswa':
            fileLocation = path.join(__dirname, 'views', 'formMahasiswa.html');
            break;
        case '/form-dosen':
            fileLocation = path.join(__dirname, 'views', 'formDosen.html');
            break;
        case '/view-mahasiswa':
            fileLocation = path.join(__dirname, 'views', 'viewMahasiswa.html');
            break;
        case '/view-dosen':
            fileLocation = path.join(__dirname, 'views', 'viewDosen.html');
            break;
        default:
            fileLocation = path.join(__dirname, 'views', '404.html');
            break;
    }

    fs.readFile(fileLocation, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end("404 Not Found");
        }

        const extname = path.extname(fileLocation);
        let contentType = 'text/html';
        if (extname === '.css') contentType = 'text/css';
        if (extname === '.js') contentType = 'text/javascript';

        res.writeHead(200, { "Content-Type": contentType });
        res.write(data);
        return res.end();
    });
});

server.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});