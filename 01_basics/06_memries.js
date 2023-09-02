/*
Primitive datatype ueses Stack memory
which return the value of an objects or variables
Not change the original value of an object all changes done in the copy 

Non-primitive datatype uses the Heap memory which return the refence of the object or variables
All the Changes are done in original object
*/

let myName="Neeta"
let anotherName=myName

console.log(anotherName);
console.log(myName);

let user1={
    email:"ravi@gmail.com",
    age:28
}

let user2=user1

user2.email="Nee@gmail.com"

console.log(user1);
console.log(user2);