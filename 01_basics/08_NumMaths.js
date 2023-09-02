/*
const score=400
console.log(score)

const balance=new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(typeof(balance));   //Object

const number2=new Number(100.45777);
console.log(number2.toFixed(1));    //100.5

console.log(number2.toPrecision(2));  //1.0e+2
console.log(number2.toPrecision(3));  //100

const hundreds=1000000
console.log(hundreds.toLocaleString(`en-IN`));  //10,00,000


//*********Maths********* */

console.log(Math);  //Object [Math] {}
/*
we have different type of functions like
ceil, floor, min,max,round,random...... so on
*/

//IMP

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);