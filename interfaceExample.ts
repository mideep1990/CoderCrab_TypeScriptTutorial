export {};
interface IPerson { 
    Name:string, 
    Age:number, 
    print: ()=>string 
 } 
 
 var customer1:IPerson = {
    Name :"Ashok",
    Age : 23,
    print:():string=>{return "Hello "+customer1.Name}
 }

 var customer:IPerson = { 
    Name:"Deepankar",
    Age:34, 
    print: ():string =>{return "Hello I am "+customer.Name} 
 } 
 
 console.log("Customer Object ") 
 console.log(customer1)
 console.log(customer1.Name);