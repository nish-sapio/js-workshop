// Callbacks
// Basically a function takes a function as a parameter it is called callback!

function greeting(name) {
    alert('Hello ' + name);
  }
  
function processUserInput(callback) {
var name = prompt('Please enter your name.');
callback(name);
}
  
processUserInput(greeting);


// Another Example 

function doHomework(subject, callback) {
    alert('Starting my'+ subject +'homework.');
    callback();
  }
  
  doHomework('math', function() {
    alert('Finished my homework');
  });


// advanced example just to show you what callbacks can do .(Don't expect yourself to understand this)
//   var T;
//   T.get('search/tweets', params, function(err, data, response) {
//     if(!err){
//       // This is where the magic will happen
//     } else {
//       console.log(err);
//     }
//   })
