"use strict";
exports.__esModule = true;
var _globalVariable1 = "I am Global"; //Global Variable
var __someClass = /** @class */ (function () {
    function __someClass() {
        this._classVariable1 = "I am Class Variable"; // Class Variable
    }
    __someClass.prototype.getSomeValue = function () {
        var _localVariable1 = "I am local Variable"; //local variable
        return _localVariable1;
    };
    __someClass._classVariable2 = "I am Static Class Variable"; // Static Class Variable
    return __someClass;
}());
//Let's Access Them
console.log(_globalVariable1);
var obj = new __someClass();
console.log(obj._classVariable1);
console.log(__someClass._classVariable2);
console.log(obj.getSomeValue());
