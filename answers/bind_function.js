// Create a standalone function `bind` that is functionally equivalent to the method `Function.prototype.bind`
//
// function example() {
//   console.log(this)
// }
// const boundExample = bind(example, { a: true })
// boundExample.call({ b: true }) // logs { a: true }
//
var example = function (arg1, arg2, arg3) {
    if (arg3 === void 0) { arg3 = []; }
    console.log(this);
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
};
var bind = function (func, thisValue) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return func.apply(thisValue, args);
    };
};
var boundExample = bind(example, { a: true });
boundExample.call({ b: true }); // logs { a: true }
boundExample("hello", 2);
boundExample("there", 3, [1, 2, 3]);
boundExample("there", 3, [1, 2, 3]);
