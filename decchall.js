// purpose: to take two arguements, both numbers and return whcihever number is the greater (higher) number. Then test the function 2 times with different pairs.
// Signature: 2 integers--> 1 integer
// Examples: greaterNum(5,10)-->10
// greaterNum(23432,2)-->23432



function greaterNum (a, b) {
  if (a>b) {
   return a
 }
 if (b>a){
   return b
 }
}

// purpose: takes an arguement and returns "hello world" in the language based on the arguement entered
// Signature: (string)-->string
// Examples: helloWorld(es)-->Hola mundo
  // helloWorld(du)-->Hello wereld

// Skeleton:
// TODO:create a function that accepts specific language values
// TODO: default back to english if not a specified value

var es;
var du;
var fr;
var a;
function helloWorld(a) {
  if (a == es){
  return "Hola Mundo!";}
  //  else {return "Hello world!";}

  if(b = du){
    return "Hello wereld!";}
      //  else {return "Hello world!";}

  if (c = fr) {
  return "Bonjour le monde";}
 // else {return "Hello world!";
// }
}
