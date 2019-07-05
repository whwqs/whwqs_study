const http = require('http');
const url = require("url");
const querystring = require("querystring");

const hostname = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
    //获取返回的url对象的query属性值 
    var arg = url.parse(req.url).query;

    //将arg参数字符串反序列化为一个对象
    var params = querystring.parse(arg);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.end(`
  {"name":"${params.name}","age":${params.age},"sex":"${params.sex}"}
  `);
});




server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});