//Object literals
//Object declartion 

//Use of symbol in object 
const mySymbol=Symbol()    //symbol declaration in Object IMP for interview 

const users={
    name:"Neeta",    //here name also consider as string
    "last name":"Khadtare",
    age:28,
    email:"nee@gmail.com",
    location:"Pune",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday","Saturday"],
    [mySymbol]:"Key1"    //symbol declaration in Object IMP for interview 
}

console.log(users.email); //not mostly used
console.log(users["email"]);   
// above is better to use because as below look peroperty 
console.log(users["last name"]);

/*console.log(user.last name);  it it not allowed to use the last name peroperty of last object so we are better to use the [] for accessing the object peoperties
*/
//symbol access in Object IMP for interview 

console.log(users[mySymbol]);
console.log(typeof users[mySymbol]);

/*const obj = {};

obj[mySymbol] = 'This is a symbol property';

console.log(typeof obj[mySymbol]); */
console.log(users);
users.email="raviraj@gmail.com"   //updating the email peotery of users object
console.log(users);
//Object.freeze(users)   //after this we cnanot update the object users
users.email="raviKiran@gmail.com"   //we cannot update object after freeze()

//use of function in object as a property

users.greeting=function(){
    console.log("Hello users");  
}
console.log(users.greeting());   

users.greetingTwo=function(){
    console.log(`Hello users ${this.name}`);
}

console.log(users.greetingTwo());
/*
Hello users
undefined      //it is not defined
Hello users Neeta
undefined      //it is not defined
*/