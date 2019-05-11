//网上生成 http://google.github.io/traceur-compiler/demo/repl.html#
$traceurRuntime.ModuleStore.getAnonymousModule(function() {
    "use strict";
    var Calc = function() {
      function Calc() {
        console.log('Calc constructor');
      }
      return ($traceurRuntime.createClass)(Calc, {add: function(a, b) {
          return a + b;
        }}, {});
    }();
    var c = new Calc();
    console.log(c.add(4, 5));
    return {};
  });
  //# sourceURL=traceured.js

  