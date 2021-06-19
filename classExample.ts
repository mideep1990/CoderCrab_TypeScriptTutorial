export{};

class __firstProg{
    value :string = "Something in class";
    print(){
        console.log("I am a class"+this.value);
    }

    
}

let obj : __firstProg = new __firstProg();
obj.print();
console.log(obj.value);


