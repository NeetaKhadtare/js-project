//Arrow functions

const user={
    username:"Neeta",
    price:999,

    welcomeMsg:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMsg()   //Neeta, welcome to website
user.username="Ravi"
user.welcomeMsg()   //Ravi, welcome to website

console.log(this);   

//In the broswer Window is global object

function chai(){
    console.log(this);
    console.log(this.username);   //undefined
}
chai()        //this shows all the current object values regarding to the broswer

//to slove the above function we use the Arrow function...... as below
// //Arrow functions declrations by diff. type 1

const addTwo=(num1,num2) => {
    return num1+num2
}
console.log(addTwo(4,5));   //9

//2
const add=(num1,num2) => num1+num2     //mostly used in the "React"
console.log(add(7,9));        //16

//3
const addition=(num1,num2) => ( num1+num2 )
console.log(addition(1,9));         //10
/*
// use () in line 40 mostly use used with the object like
const info=(username) => ({username:"Neeta"})
console.log(info("Nee"));  //Need to research....
*/