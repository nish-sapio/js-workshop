//COERCION

// "+" IS THE CONCATENATION OPERATOR AND GIVES THE PRIORITY TO THE STRING DATA TYPE
var string = "42";
var number = 2;

console.log(string + number);

// "*" IS THE MULTIPLICATION OPERATOR AND GIVES THE PRIORITY TO THE NUMBER DATA TYPE

console.log(string * number);
console.log("in case you are wondering the data type of the output: its a " + typeof(string*number));