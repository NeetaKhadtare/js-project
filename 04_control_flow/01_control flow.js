/*Control flow
1: if

if(condition){

}
*/

const isUserloggedIn=true

if(isUserloggedIn){
    console.log("Login successfully.....");
}

if(2==="2"){   //this will not execute 
    console.log("2 is not like '2' ");
}
// === used to check the type of varible also

if(2!==3){
    console.log("True");   
}

const temperature=41

if(temperature<50){
    console.log("Less than fifty");
}
console.log("temp is greater than 50");

//2. if.....else

if(temperature===41){
    console.log("Less than fifty");
}
else{
console.log("temp is greater than 50");
}

const score=200

if(score>100){
    let power="fly"
    console.log(`User power:${power}`);
}

// Short hand notation

const balance=100

if(balance>500) console.log("test");    
//Implicit scope donot use multiple lines

if(balance<500){
    console.log("Less than 500 ");
}else if(balance<750){
    console.log("Less than 750");
}else if(balance<900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}


const userLoggedIn=true
const debitCard=true
const LoggedInGoogke=true
const LoggedByEMail=true

if(userLoggedIn && debitCard){
    console.log("Allowed t by courses");
}


if(userLoggedIn && debitCard && 2==3){
    console.log("Allowed t by courses");
}

if(LoggedInGoogke || LoggedByEMail ){
    console.log("User logged In");
}