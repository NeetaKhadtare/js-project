/* Primitive
7 types:-
String, Number, Boolean, nulll, undefined, symbol, Big
Int
Reference type(Non primitive (haing reference in memory)):-
Array, Objects, Functions
*/

const score=100  //number
const scoreValue=100.3  

const isLoggedIn=false  //boolean
const outsideTemp=null //null
let userEmail;  //undefined

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);  //returns false value

const bigNumber=123245768787563423132n
//in above deaclaration "n" represents BigInt

const colours=["Red","Pink","Blue","Black"];

let myObj= { 
    firstName:"Neeta",
    age:27,
}

//Functions

const myFunction= function(){
    console.log("Hello world");
}

console.log(typeof(myFunction));   //returns function as type
