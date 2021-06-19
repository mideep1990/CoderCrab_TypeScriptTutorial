export {};
var _globalVariable1:string = "I am Global";  //Global Variable
class __someClass{
    _classVariable1:string = "I am Class Variable"; // Class Variable
    static _classVariable2:string = "I am Static Class Variable"; // Static Class Variable

    getSomeValue():string {
        var _localVariable1 = "I am local Variable" //local variable
        return _localVariable1;
    }
}

//Let's Access Them
console.log(_globalVariable1);
var obj:__someClass = new __someClass();
console.log(obj._classVariable1);
console.log(__someClass._classVariable2);
console.log(obj.getSomeValue());