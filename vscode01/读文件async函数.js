const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function* () {    
  const f1 = yield readFile('1.txt');
  
  const f2 = yield readFile('2.txt');
  
  console.info(f1.toString());
  console.info(f2.toString());
};

var g = gen();

g.next().value.then(function(data){
  g.next(data).value.then(function(data){
    g.next(data);
  });
});

//async方式
const asyncReadFile = async function () {
  try{
    const f1 = await readFile('11.txt');
    console.log(f1.toString());
  }catch(err)
  {
    console.log(err);
  }
  const f2 = await readFile('2.txt');
  
  console.log(f2.toString());
  return "hello";
};

asyncReadFile();