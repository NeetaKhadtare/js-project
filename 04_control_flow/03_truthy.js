//truthy ....

const email="  "

if(email){
    console.log("Got user email");
}else{
    console.log("User donot have any email");
}

/* In the above if() the value is true then only it will executed if it have empty spaces values in the email variable like email="  "

Falsy values

false, 0, -0, bigInt 0n, "", null, undefined, NaN

True values

"0",'false'," ", [], {}, function(), and all other statement are true
*/

let userEmail=[]

if(userEmail.length ===0){
    console.log("Array is empty");
}

const obj={}
if(Object.keys(obj).length === 0){
    console.log("Object empty");
}


//Nullish Coalescing Operator (??): Null undefined

let val1;
val1=5 ?? 10           //5
val1=null ?? 10        //10
val1=undefined ?? 15   //15
val1=null ?? 10 ?? 15   //10

console.log(val1);

// Ternary operator
// Syntax :  condition ? true : false

const iceTea=100 

 iceTea >= 80 ? console.log("Less than 80")  : console.log("More than 80");