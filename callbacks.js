//Scoping

var a = 25;

(function stage1(a){
	console.log("The value of a in stage 1 : " + a); 
})(10);

(function stage2(){
	var a = 20;
	console.log("The value of a in stage 2: " + a);
})();

console.log("The value of a declared globally is:" + a);

if(1){
	let a = 50;
	console.log("The value of a in if block with let: " + a);
}

console.log("The value of a declared globally is:" + a);

if(1){
	a = 40;
	console.log("The value of a in if block without let: " + a);
}

console.log( "The value of a declared globally is after if statements:" + a);