const http = require('http')

const server = http.createServer((req,res) =>{
if (req.url === '/'){
    res.end ('welcome to our hp')
}
if(req.url === '/about'){

    res.end('here is our history')
}
res.end(`<h1> oops </h1<
<p> cant seem to find page </p>
<a href="/">back home</a>
`)
})

server.listen(5000)
console.log('server is listening on 5000')