const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    if(req.url === '/home' || req.url === '/' ){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/contact.html').pipe(res);
    } else if(req.url === "/api/info"){
        let info = {name:'pikachu', age:'12', type:'electric'};

        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(info));
    } else{
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('now listening at port 3000--------');
