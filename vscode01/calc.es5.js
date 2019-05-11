var Calc2 = function() {
  "use strict";
  function Calc() {
    console.log('Calc constructor');
  }
  return ($traceurRuntime.createClass)(Calc, {add: function(a, b) {
      return a + b;
    }}, {});
}();
var c = new Calc2();
console.log(c.add(4, 5));
