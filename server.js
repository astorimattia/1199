const http = require('http');
const fs = require('fs');
const path = require('path');

// Server for port 3000 (main site)
const mainServer = http.createServer((req, res) => {
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = path.join(__dirname, filePath);
    
    // Only serve files from root directory (not from archive)
    if (filePath.includes('/archive/')) {
        res.writeHead(404);
        res.end('Not found');
        return;
    }
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Not found');
            return;
        }
        
        const ext = path.extname(filePath);
        const contentType = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'text/javascript',
            '.webp': 'image/webp',
            '.woff2': 'font/woff2'
        }[ext] || 'text/plain';
        
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

// Server for port 3001 (archive site)
const archiveServer = http.createServer((req, res) => {
    let filePath = req.url === '/' ? '/index.html' : req.url;
    
    // Check if the request is for a public file (like logos)
    if (filePath.startsWith('/public/')) {
        filePath = path.join(__dirname, filePath);
    } else {
        // Serve from archive directory
        filePath = path.join(__dirname, 'archive', filePath);
    }
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Not found');
        }
        
        const ext = path.extname(filePath);
        const contentType = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'text/javascript',
            '.webp': 'image/webp',
            '.woff2': 'font/woff2'
        }[ext] || 'text/plain';
        
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

// Start both servers
mainServer.listen(3000, () => {
    console.log('Main server running on http://localhost:3000');
});

archiveServer.listen(3001, () => {
    console.log('Archive server running on http://localhost:3001');
});

console.log('Both servers are now running!');
console.log('Main site: http://localhost:3000');
console.log('Archive site: http://localhost:3001');
