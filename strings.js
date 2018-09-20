// strings
var str = "Hello World!" ;

// it can be treated as an array of characters (though it is not).
// so str[1] will be 'H' and str[5] is ' ' .

// property: length

var length = str.length; // 11

console.log(length);

str = " This is JavaScript Tutorial"; // overwrite already present str. 

// indexOf Method
// gives the position of the first letter of the word when it is matched. 
var pos = str.indexOf("JavaScript",0); // Here 2nd param (0) is starting position of the search, if nothing is given it is treated as 0.
console.log(pos);

//lastIndexOf Method
// gives the position of the last leter of the word when it is matched.
var lastPos = str.lastIndexOf("JavaScript", 0); // Here 2nd param (0) is starting position of the search, if nothing is given it is treated as 0.
console.log(lastPos);


// Extracting String Parts
    //1. slice method 
    //2. substr method
    //3. replace
var slicedString = str.slice(1,9); // first parameter is compulsory, if 2nd param is not given , it will search the whole string.
console.log("slicedString", slicedString);        // if negative param is given it will search from the last. (Try and play with it!)

var substrString = str.substr(7, 6); // similar to slice but second param is the length of the string. (First remaining the the position)
console.log("subString", substrString);

var replacedString = str.replace('This', 'That'); // returns a new string. 
console.log("replacedString", replacedString);


