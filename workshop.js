// array-2 : Methods
var fruits = ["Banana", "Orange", "Apple", "Mango"];

// Join
var fruitsJoin = fruits.join(":");

console.log("fruitsJoin",fruitsJoin);
 

// pop 

var lastElement = fruits.pop(); // doesn't take any parameter , removes last element.

console.log("lastElement", lastElement); // returns last element

console.log("fruits", fruits); // removes last element from main array


// shift 
// similar to pop but works on first element instead of last element


//push
// pushes an element to the last of the array
var x = fruits.push("Kiwi");   //  the value of x is 5 

//splice *important*

fruits.splice(
    2, // position where you want to ad 
    0, // how many elements to be removed
    "lemon", // what to be added
    "Pineapple"
)

console.log(fruits);

// concat *important*
//concats (joins) two arrays.
var vegetables = ["Potato", "Tomato", "Onion"];
var eatables = fruits.concat(vegetables);
console.log("eatables are", eatables);