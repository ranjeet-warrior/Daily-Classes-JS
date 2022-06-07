// let number1One=34;//integer
// let numberTwo=17.34;//float

// let isTrue= false;//boolean

// let myName="Ranjeet";//string

// let myAddress= "545,GT Road,-851129";//string

//naming convention for variables

//1.Try to give it as descriptive as possible
// 2 We have to keep our variables name in camel case (pascal case,kebab case)
//Try to avoid numbers in integer format instead use it in string format and characters in your variable name

//keywords- let,var,const



//let-This keyword is used to declare a variable in a line which can or cannot be assigned the value instantly or on the same line
// These have variables with same name.
//This keyword is generally used when variables value is supposed to change in future
// They are not hoisted
// let value;
// value = 29;
// let value = 29;

// let result = 0;
// result = result+2;

//const-This keyword has  to be declared and initialized with the value in one line only.
//This can't have variables with same name.
//This variables value can never change,If changed will give u error
//this isn't hoisted

// const newInteger=23;

//var-This  keyword is used to declare a variable in a line which can or cannot be assigned the value instantly or on the same line
//This can have variables with same This leads to overrride previous values.
//var keywords are hoisted
//  var myhobby;
//  myhobbing = "skating";

//  var myhobby = "Dance"; //overrriding will occur not recommended

 //-------------------------------------------------------------------------------------------------------------------------------------------------------

//Hoisting-It allows u to use the variable name even before declaring them
//It is only supported by the var keywords and functions
//Hoisting is only supported for declaration and not initialization.
//It brings the code declaration to the top of the code.

// for keywords let and const declaration and initialization needs to be done before using that variable

//variables with "var" keywords only allow you to access the variables before initialization

//let and const keywords are stored in Temporal Dead Zone


console.log(myStreet);//undefined
var myStreet;
myStreet = "39"
myStreet = "Howrah";


//function supports hoisting
function addition(a,b){
    let res = a+b;
    console.log(res);
}

//functions and var keywords supports hoisting