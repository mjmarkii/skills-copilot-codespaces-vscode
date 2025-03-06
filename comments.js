// Create a web server
// 1. Create a web server
// 2. Handle GET requests with a path '/comments'
// 3. Return a list of comments in JSON format

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    const comments = [
      { name: 'John', comment: 'Hello' },
      { name: 'Jane', comment: 'Hi' }
    ];
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments));
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});