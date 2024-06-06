//class is blueprint of object.

class Car
{
    //to initialize the object.
    constructor(name, color)
    {
        this.name = name;
        this.color = color;
    }

    //here no fuction keyword is used.
    print()
    {
        console.log("car name is "+this.name+"=> car color is "+this.color);
    }

}

//creating object.
// let suzuki = new Car("suzuki","black");
// suzuki.print();

//object is blueprint of class.







//main js object.
//this object contain "key" , "value"  pair.
let object = {
    "color" :"red",
    "model" :"tata",
    "ghear" :"automatic",
    3:"vipul",
    2:"shubh"
}

// console.log(object)
// //to access key value pair in object.
// //VIMPPP
// console.log(object["color"]);
// console.log(object["2"]);

// //how to add key value pair in object.
// object["DOB"] = "20/07/2001";
// console.log(object)


//for in loop.
// for(key in object)
//     {
//         console.log(key +" "+object[key]);
//     }




