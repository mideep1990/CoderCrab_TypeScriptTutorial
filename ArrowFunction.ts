export {};
//hello:void = () => "Hello World!";
const hello = function() {
    return "Hello World 0!";
  }

  function hello1() {
    return "Hello World 1!";
  }

  const hello2 = () =>  {
    return "Hello World 2!";
  }

  const hello3 = () => "Hello World 3!"

  const hello4 = (val1:string,val2:boolean) => "Hello World 4!"+val1+" | "+val2;


  let c = hello();
  console.log(c);

  let c1 = hello1();
  console.log(c1);

  let c2 = hello2();
  console.log(c2);

  let c3 = hello3();
  console.log(c3);

  let c4 = hello4("test",false);
  console.log(c4);
