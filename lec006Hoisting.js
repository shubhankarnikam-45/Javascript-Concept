console.log("hoisting");
//var b = undefined.

//declare.
// var a;

//declaration + initialization.
// var b = 10;

//1. Hoisting concept in case of VAR.
// console.log("value of b",b);
// var b = 10;
// console.log("value of b",b);
//DEFINATOIN.
//hoisting is concpet where declared variable going to top of scope and intitialize
//value with 'undefined'.

//2. Hoisting concept in case of LET. 
//avoid proble of VAR. 
// console.log("value of b",b);
//ReferenceError: Cannot access 'b' before initialization
// let b = 10;
// console.log("value of b",b);

//3. Hoisting concept in case of CONST.
//the value throught out program const.
//rule of const declare and initilize at same line.
// console.log("const value", PI); 
// const PI = 3.14;
// console.log("const value", PI); 



