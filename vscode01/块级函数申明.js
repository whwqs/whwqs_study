function f1(){
    console.info("1");
}

{
    function f1(){
        console.info("2");
    }
}

f1();


function f() { console.log('I am outside!'); }

(function () {
    //$ var f;
  if (false) //true 不报错；false 报错：Uncaught TypeError: f is not a function
  {
    // 重复声明一次函数f，会被提升到$处申明，因此下面f()会报错
    function f() { console.log('I am inside!'); }
  }
  console.info(typeof(f));

  //f();
}());

//用函数表达式，而非函数申明方式
(function () {   
  
  {
    // 重复声明一次函数f，
    let f = function() { console.log('I am inside!'); }
  }
  f();
}());

