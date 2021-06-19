export {};
interface IPerson { 
    Name:string, 
    Age:number, 
    print: ()=>string 
 } 
 
 var customer:IPerson = { 
    Name:"Deepankar",
    Age:34, 
    print: ():string =>{return "Hello I am "+customer.Name} 
 } 
 
 console.log("Customer Object ") 
 console.log(customer.Name) 
 console.log(customer.Age) 
 console.log(customer.print())  