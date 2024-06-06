
//scope
//1. local scope.
//2. Global scope.
//script is global score.

//3. function scope.

//exaxmple of global scope.
let global = "global";

function fun()
{
    let a = 10;
    console.log("global in local",global);
    console.log("local scope",a);

    //special 
    {
        //ex of scope.
    }
}

fun();

//error when we acces local variable in global scope.
// console.log("global scope",a);

//local and function scope is same.
