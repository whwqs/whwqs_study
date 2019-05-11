var $__initTailRecursiveFunction = $traceurRuntime.getModule($traceurRuntime.normalizeModuleName("traceur/dist/commonjs/runtime/modules/initTailRecursiveFunction.js", "calc.js")).default;
var $__continuation = $traceurRuntime.getModule($traceurRuntime.normalizeModuleName("traceur/dist/commonjs/runtime/modules/continuation.js", "calc.js")).default;
var $__call = $traceurRuntime.getModule($traceurRuntime.normalizeModuleName("traceur/dist/commonjs/runtime/modules/call.js", "calc.js")).default;
var $__createClass = $traceurRuntime.getModule($traceurRuntime.normalizeModuleName("traceur/dist/commonjs/runtime/modules/createClass.js", "calc.js")).default;
var Calc3 = $__initTailRecursiveFunction(function() {
  return $__call(function() {
    "use strict";
    function Calc() {
      console.log('Calc constructor');
    }
    return $__continuation($__createClass, null, [Calc, {add: function(a, b) {
        return a + b;
      }}, {}]);
  }, this, arguments);
})();
var c = new Calc3();
console.log(c.add(4, 5));
