const name="Neeta"
const age=28

//console.log(name+" "+ age+" Value");   //not good to use this

//console.log('Hello my name is ${name} and my age is ${age}');

console.log(`Hello my name is ${name} and my age is ${age}`);  //use tialed sign

const gameName=new String('Tic-tac-toc')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__);   //it returns the object

//Method or functions in String
console.log(gameName.length);
console.log(gameName.toLowerCase());


const newString=gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-1,1)
console.log(anotherString);
/*const str = "Hello, World";

const slice1 = str.slice(0, 5); // Extract characters from index 0 to 4
console.log(slice1); // Output: "Hello"

const slice2 = str.slice(7); // Extract characters from index 7 to the end
console.log(slice2); // Output: "World"

const slice3 = str.slice(-5); // Extract last 5 characters
console.log(slice3); // Output: "World"

const slice4 = str.slice(0, -7); // Extract characters from index 0 to (length - 7)
console.log(slice4); // Output: "Hello"

trim(), replace()  check all the methos of String inpesct
*/


