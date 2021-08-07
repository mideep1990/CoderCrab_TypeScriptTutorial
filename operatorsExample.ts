export{};
//Arithmatic Operators
console.log("//Logical Operators------------------------------------------------");
let a:number = 20;
let b:number = 30;

console.log("(+) Result = "+(a+b))
console.log("(-) Result = "+(a-b))
console.log("(*) Result = "+(a*b))
console.log("(/) Result = "+(a/b))
console.log("(%) Result = "+(b%a))
console.log("===========================")
let d:number = 32;
console.log((d+a)+" (Post++) Result = "+(d+(a++))+" | "+(d+a))  // 20+1 = 21  52 -- 20 --53
console.log("(Original) Result = "+(a))
console.log((d+a)+" (++Pre) Result = "+(d+(++a)) +" | "+(d+a))  // 52 -- 21 --53
console.log("===========================")
console.log("(Post--) Result = "+(b--))
console.log("(Original) Result = "+(b))
console.log("(--Pre) Result = "+(--b))

//Logical Operators
console.log("//Logical Operators------------------------------------------------");
let x:number= 2;
let y:number=12;
console.log("&& Operator - "+(x>0 && y>0));
console.log("|| Operator - "+(x>0 || y>20));
console.log("! Operator - "+!x);

//Assignment Operator
console.log("//Assignment Operators------------------------------------------------");
let xA:number= 2;
let yB:number;
console.log("= Operator - yB = "+(yB=xA));
console.log("+= Operator - "+(xA+=20));  //xA = xA + 20
console.log("-= Operator - "+(xA-=20));  //xA = xA - 20
console.log("*= Operator - "+(xA*=20));  //xA = xA * 20
console.log("/= Operator - "+(xA/=2));  //xA = xA / 2
console.log("%= Operator - "+(xA%=2));  //xA = xA % 2

//Ternary Operator
console.log("//Ternary Operators------------------------------------------------");
let xT :number = 20;
let someText:any = xT>0?"xT is greater than Zero":"xT is less than Zero";
console.log(someText);

//Concatenation Operator
console.log("//Concatenation Operators------------------------------------------------");
let age :number = 32;
console.log("Hi, This is Deepankar, I am "+age+" years old");

//Type of Operators
console.log("//TypeOf Operators------------------------------------------------");
let xTO:number= 2;
console.log("Type of xTO = "+typeof xTO);

//instance of Operators
console.log("//instanceof Operators------------------------------------------------");
let animals = ["Dog","Cat","Rat"];
console.log("Animals is an instance of - "+(animals instanceof Object))

//Relational Operators
console.log("//Relational Operators------------------------------------------------");
let xR:number= 2;
let yR:number = 10;
console.log("> Operator "+(yB>xA));
console.log("< Operator "+(yB>xA));
console.log(">= Operator "+(yB>xA));
console.log("<= Operator "+(yB>xA));
console.log("== Operator "+(yB>xA));
console.log("!= Operator "+(yB>xA));
console.log("=== Operator "+(yB>xA));

//Bitwise Operators
console.log("//Bitwise Operators------------------------------------------------");
let xBit : number = 12;//
let yBit : number = 3;

console.log("Binary of xBit = "+xBit.toString(2))
console.log("Binary of yBit = "+yBit.toString(2))

console.log("AND(&) Operator "+(xBit & yBit));
console.log("OR(|) Operator "+(xBit | yBit));
console.log("XOR(^) Operator "+(xBit ^ yBit));
console.log("NOT(~) Operator "+~xBit +" / " +~yBit);
console.log("Left-Shift(<<) Operator "+(xBit << yBit));
console.log("Right-Shift(>>) Operator "+(xBit >> yBit));
console.log("Right-Shift-Zero(>>>) Operator "+(xBit >>> yBit));







   