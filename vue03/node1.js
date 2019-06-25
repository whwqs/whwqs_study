const http = require('http');

const hostname = '10.0.0.204';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
  res.end(`
  {"id":1234,"name":"2号压缩机","type":"生产线部件","dataType":"运行时数据",
  "data":{
    "F":${Math.round(Math.random()*100000)/100},
    "V":${Math.round(Math.random()*100000)/100},
    "I":${Math.round(Math.random()*100000)/100}},"showType":"视觉"}
  `);
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});