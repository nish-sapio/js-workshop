// functions


function greetName(name) {
    console.log("My name is ", name);
}
greetName('<yourName>');

// assigning functions to variables. (No practical difference)

var greetFunction = function (name) {
    console.log("My name is ", name);
}
greetFunction('Kailash');

// names is an array
var names = ['name0', 'name1', 'name2', 'name3']

// forEach is a loop in Js that takes a function as a parameter.

function greetNames(names) {
    // greetNames takes array as a parameter.
    names.forEach(function (name) { // here this function is an anonymous function i.e with no name.
        console.log(name); //  function is called for each element in the array. 
    });
}
greetNames(names);

function greetNames2 (names) {
    names.forEach(name => { // arrow notation of a function name is a parameter, as above. (Not any difference)
        console.log(name);
    });
}
greetNames2(names);

// Immediately Invoked Function Expressions (IIFE)

// These functions need not be executed seperately, they are called as soon as function is completed.

(function (name) {
    console.log('My name is ', name);
})('Javascript');

