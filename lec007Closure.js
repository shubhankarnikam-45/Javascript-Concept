

//Closure is technique where we can access lexical scope means inner function can 
//access outer function variable.


function outer()
{
    //outer function variable.
    let a = 10;
    let b = 29;
    return function()
    {
        return a + b;
    }
}


let innerFun = outer(); ///
// return function()
//     {
//         return a + b;
//     }

console.log(innerFun()); // a + b.