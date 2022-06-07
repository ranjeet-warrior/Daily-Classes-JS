//console.log("working");
//let a=20;
//let b=30;
//let result=a+b;
//console.log(result);
// In the creation phase,all the variables are allocated memories(Space to store values) and assigned with a default values as
 // undefined.They are  not initalised with their initial values/assigned values.
 // In the execution phase,we allocate the actual values to the variables instead of the default value,undefined

//function addition(a,b){//parameters
  //  let result=a+b;    // body
 //   console.log(result);
//}
//let valueOne = 3;
//let valuetwo = 4;
//let valuethree = 5;
//let valuefour=   6;
//addition(valueOne,valuetwo); // arguments
//addition(valuethree,valuefour);//arguments
 //let add = ()

 //The very first thing that is created while  we write and execute the code is Global execution context
 //It has two parts
 //1.Creation Page
 //2.Transition Page 

let name1 = "Sahil";
let name2 = "rajat";

function operation(a,b,c){
    let res1 = a + b;
    let res2 = res1 + c;
    return res2;
}

var finalResult = operation(3,4,5);
console.log(finalResult);