console.log("working");
// Arithmetic Operators:
// 1.addition(2+3=)
// 2.subtraction
// 3.multiplication
// 4.division
// 5.Modulus-Remainder
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2%3);


console.log("hi"+"shyam");
console.log("hi"-"shyam");
console.log("hi"*"shyam");
console.log("hi"/"shyam");

//No arithmetic operations are possible for the strings except addition which is basically concatenation

//comparison operators
console.log(2>3);//false
console.log(2<3);//true
console.log(2>=3)//false
console.log(2<=3);//true

console.log(2==3);//false
console.log(2!=3);//true
console.log(2=="2"); //checks only values
console.log(2==="2"); // check values and datatypes

console.log("Hi"=="Hi"); 
console.log("Hi"==="hi");

console.log(typeof("string"));

//Bitwise operators:
//bitwise and- a&b
//bitwise or a/b
//left-shift operator(<<)
//right-shift operator(>>)

console.log(2&3);
console.log(2|3);
console.log(2^3);
console.log(~2); //for negation value will be number+1 and negative sign
console.log(~5);
console.log(~12);
console.log(2<<3);
console.log(2>>3);

console.log(5<<3);
console.log(8>>3);
console.log(5>>>3);
console.log(27>>>3)

//Invrement and Decrement Operators
let a=2;
// prefix and postfix operators
console.log(a++);
console.log(a);
console.log(++a);
let b=3;
console.log(b--);
console.log()
let c=2;
let d=3;
console.log(++c+d++);
console.log(c,d);

//Logical Operators
  // &&(AND),||(OR),!(NOT)
  var f;
  var g;
  console.log(f&&g); //if the first variable is zero true then second variable is output
                     //
let f=1;
let g=10;
console.log(f||g)

console.log(!(F>0))//false
console.log(!f);

// A number which is non zero is considered true by default and negation on true will suppose to give u falsr
let h=1;
// comma operator
let x=1;
(x++,x)
console.log(x);