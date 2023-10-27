const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url ==='/'){
        res.end('Welcome to my home pgae')
    }
    if (req.url ==='/about'){
        res.end('Here is your short history')
    }
    res.end(`
    <h1>Oops</h1>
<p>We can't seem to find the page your are looking for </p>
<a href="/">Back home </a>
`)
})

server.listen(5000)