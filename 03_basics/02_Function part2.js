function calculateCartPrice(...num1){
    return num1
}
 console.log(calculateCartPrice(200));         //[200]
 console.log(calculateCartPrice(200,300,400));    //[ 200, 300, 400 ]

 /* when we having more than one parameter to the function it get confused at time of program run to avoid the this problem we use the "restoperator ..." like
 calculateCartPrice(...num1)
 it returns the no. of parametres so avoided by anothe r method the we can see after some topic
*/

 //Use of Object with function

 const user={
    username:"Neeta",
    price:200
 }

 function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
 }

 handleObject(user)   //User name is Neeta and price is 200

 //another one exmple

 handleObject(
    {
        username:"Neeta",
        price:500
    }
 )
//Function with array

 const newArray=[200,300,400,400]

 function returnSecodValue(getArray){
   return getArray[1]
 }
console.log(returnSecodValue(newArray));   //300
//also above written as like
console.log(returnSecodValue([400,500,600]));   //500


