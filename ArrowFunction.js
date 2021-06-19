"use strict";
exports.__esModule = true;
//hello:void = () => "Hello World!";
var hello = function () {
    return "Hello World 0!";
};
function hello1() {
    return "Hello World 1!";
}
var hello2 = function () {
    return "Hello World 2!";
};
var hello3 = function () { return "Hello World 3!"; };
var hello4 = function (val1, val2) { return "Hello World 4!" + val1 + " | " + val2; };
var c = hello();
console.log(c);
var c1 = hello1();
console.log(c1);
var c2 = hello2();
console.log(c2);
var c3 = hello3();
console.log(c3);
var c4 = hello4("test", false);
console.log(c4);
