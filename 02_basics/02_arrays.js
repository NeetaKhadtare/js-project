
const name=["Neeta","Geeta","Seeta"]
const age=[20,25,30,35]

name.push(age)
console.log(name);  

/* [ 'Neeta', 'Geeta', 'Seeta', [ 20, 25, 30, 35 ] ]
 push method add the sencond array as a one whole element of first array as above in the same array
*/

const info=name.concat(age)
console.log(info);
/*
[ 'Neeta', 'Geeta', 'Seeta', 20, 25, 30, 35 ]
concat method add the elemts of another array into forst array as elements of array and returns the new array 
 but above both methods are not good for use so we use below method for adding to array n one whole array
*/

const city=["Pune","Selu","Goa"]
const all_info=[...name,...age,...city]
console.log(all_info);
/*[
  'Neeta', 'Geeta',
  'Seeta', 20,
  25,      30,
  35,      'Pune',
  'Selu',  'Goa'
]*/


const anotherArray=[1,2,3,4,[5,6],7,[8,9,[10,11]]]
const newArray=anotherArray.flat(Infinity)
console.log(newArray);
/*
[
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
]
flat method used to create new one array from one array which is having "n" sub arrays 
we can give the no. of depth or else use the "Infinity"
*/

console.log(Array.isArray("Neeta"))  //false
//console.log(Array.from("Neeta"));  //[ 'N', 'e', 'e', 't', 'a' ]

console.log(Array.from({names:"Neeta"}));  //[] it reurns an empty array
/*
IMP for interviews
*/

let num1=100
let num2=200
let num3=300

console.log(Array.of(num1,num2,num3));  //[ 100, 200, 300 ]

console.log(Array.of(name,age,city));

/*[
  [ 'Neeta', 'Geeta', 'Seeta', [ 20, 25, 30, 35 ] ],
  [ 20, 25, 30, 35 ],
  [ 'Pune', 'Selu', 'Goa' ]
]
*/