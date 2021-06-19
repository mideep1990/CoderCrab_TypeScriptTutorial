"use strict";
exports.__esModule = true;
var __firstProg = /** @class */ (function () {
    function __firstProg() {
        this.value = "Something in class";
    }
    __firstProg.prototype.print = function () {
        console.log("I am a class" + this.value);
    };
    return __firstProg;
}());
var obj = new __firstProg();
obj.print();
console.log(obj.value);
