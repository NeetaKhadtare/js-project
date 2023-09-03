//Object declrations 

const tinderUser=new Object()  //Singleton
const tinderUser2={}           //non-Singleton

console.log(tinderUser);   //{}
console.log(tinderUser2);   //{}

tinderUser.id="123abc"
tinderUser.name="Neeta"
tinderUser.isLoggedIn=false
tinderUser.city="Pune"

//console.log(tinderUser);   

//declarations of cascade of objects
const regularUser={
    email:"ruhi@gmail.com",
    fullName:{
        userFulName:{
            fisrtName:"Neeta",
            lastName:"Khadtare"
        }
    }
}
console.log(regularUser)
/*
{
  email: 'ruhi@gmail.com',
  fullName: { userFulName: { fisrtName: 'Neeta', lastName: 'Khadtare' } }
}
*/

console.log(regularUser.fullName.userFulName);  //{ fisrtName: 'Neeta', lastName: 'Khadtare' }

//console.log(regularUser.fullName);
//console.log(regularUser.userFulName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}  //not allowd

const obj3=Object.assign(obj1,obj2)
console.log(obj3);    //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//but not use the assign method for better code we use the "spread ..."
const obj4={...obj1,...obj2}
console.log(obj4);

const users=[
    {
        id:1,
        emialId:"ravisha@gmail.com"
    },
    {
        id:2,
        emialId:"rahi@gmail.com"
    },
    {
        id:3,
        emialId:"sha@gmail.com"
    },
    {
        id:4,
        emialId:"varun@gmail.com"
    },
    
]

console.log(users[1].emialId);  //rahi@gmail.com

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //true
console.log(tinderUser.hasOwnProperty('isLogged'));    //false



