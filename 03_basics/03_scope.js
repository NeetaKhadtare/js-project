/*scope regarding to the "let, const and var"
the scope of the variables are in between the "{}" only,
we have 2 scopes
      1: Block scope                     2: Global scope

*/
let a=20     //Global scope
var b=30
const c=40

if(true){
    let a=60      //local scope or block scope
    var b=70 
    //c=80      //not allowed because of "const"
    console.log("Inner a:"+a);
}

console.log(`outer a value ${a}`);   //20
console.log(b);   //70   it is wrong because it overwrite the value of b 30 to 70
console.log(c);  //40


function one(){
    const username ="Neeta"

    function two(){
        const website="Youtube"
        console.log(username);
    }
    //console.log(website);   //not allowed
    two()
}

one()

if(true){
    const username="Neeta"
    if(username==="Neeta"){
        const website="Youtube"
        console.log(username + website);   //NeetaYoutube
    }
   // console.log(website);   //not allowed because of scope
}

//console.log(username);   //not allowed because of scope



//*****************Interesting IMP******************* */
console.log(addone(5))   //prints the 6 after updating the value
function addone(num){
    return num+1
}
addone(1)   // only return the value

//console.log(addTwo(5))    //this is not work here as above because the declaration of diiferent way of functions

const addTwo=function(num){
    return num+2
} 
addTwo(5)