console.log("working");

//Normal function with function keyword which may or maynot require parameters to accept argument
function sayHi(nameOne, nameTwo) {        
    console.log("Hello" ,nameOne,nameTwo);
}
sayHi("Raghav","Abhishek"); //calling a function Raghav,Abhishek-Arguments

//Arrow Functions-They have different synatx to that of normal function.It is mostly used and we too be using it quite often.

const add=(a,b) => {
    let result=a+b;
    console.log("result",result);
} 
add(3,4);
console.log(add);

//----------------------------------------------

//Function expressions
const multiply = function(a,b){
    console.log("The multiple of a and b is",a*b);
}
multiply(4,5);
console.log(multiply);

const percentage=( marks1, marks2) => {
   let total= (marks1+marks2);
   let percent=(marks1+marks2)/2;
   console.log("percent",percent);
}
percentage(95,92);

//-------------------------------------------------------
//Block Scoping and shadowing
//let,const variables are block scoped..v..Imp
// var variables aren't block scoped

var f= 10;
{
    var g= 20;
    console.log(g);//20
}
console.log(f);//10


//values assigned with var variables are not like that of let and const
//the last assigned values are the one,s asssigned to var variables

// Scope and lexcical Environment
//lexical environment is the behaviour of looking a variable to its parents scope , 
// if not found there then to its parent's parent also...Upto global scope.

let a= 10;
function one(){
    let b=20;
    console.log(a+b);//30
    two();

    function two(){
        let c=30;
        console.log(a+b+c);//60

        three();
        // function three(){
        //     let d=40;
        //     console.log(a+b+c+d);//100
        }
    }

one();


