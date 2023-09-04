//Functions
function sayAlphabets(){
    console.log("A");
    console.log("B");
    console.log("C");
    console.log("D");
    console.log("E");
}
sayAlphabets()    //A B C D E
sayAlphabets  //it is only reference of function name it does not reurn any thing

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}

addTwoNumbers()  //NaN
addTwoNumbers(3,6)   //9
addTwoNumbers(3,"4")   //34
addTwoNumbers(3,"a")   //3a
addTwoNumbers(3,null)   //3 

const result=addTwoNumbers(3,4)
console.log(result);   //undefined (because the function not reurn any value)


function addTwoNumbers(number1,number2){
    //let res=number1+number2;
    //return res
    return number1+number2
}
const result2=addTwoNumbers(3,4)
console.log("Result is:",result2);


function loginUserMsg(username){
    if(username===undefined){    //(if!username)
        return console.log("Please enter the user name");
    }
    return `${username}  just logged in `
}

console.log(loginUserMsg("Neeta"));
/*we canalso pass the default value to function like 
function loginUserMsg(username="Nee")
*/

