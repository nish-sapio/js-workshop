// OPERATORS

//LOGICAL OPERATORS

var c1 , c2 , c3, c4, c5, c6, c7, c8;

//PLAYING WITH OR OPERATOR
c1 = 3 || 4; //true || true 
console.log("c1: " + c1);
c2 = 5||0; //true || false
console.log("c2: " + c2);
c3 = 0||3; //false || true
console.log("c3: " + c3);
c4 = 0||0; //false || false
console.log("c4: " + c4);


//PLAYING WITH AND GATE
c5 = 3 && 4; //true && true 
console.log("c5: " + c5);
c6 = 5&&0; //true && false
console.log("c6: " + c6);
c7 = 0&&3; //false && true
console.log("c7: " + c7);
c8 = 0&&0; //false && false
console.log("c8: " + c8);


//THE COMPARISON OPERATOR
var a = "2";
var b = 2;

if(a == b)
	console.log("hello");

if(a===b)
	console.log("bye");