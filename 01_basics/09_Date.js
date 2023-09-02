/* Dates

let MyDate=new Date()
console.log(MyDate.toString());
console.log(MyDate.toDateString());
console.log(MyDate.toLocaleDateString());
console.log(typeof MyDate);    //Object

let myCreatedDate=new Date(2023,0,23);
console.log(myCreatedDate.toDateString());  //month start from the 0

let myCreatedDate=new Date(2023,0,23,5,4);   
console.log(myCreatedDate.toLocaleString());

let myCreatedDate=new Date(0,11,2023);
console.log(myCreatedDate.toDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
*/

let newDate=new Date()
newDate.toLocaleString('default',{
    weekday:"long",
   // timeStyle:"medium"  
})

console.log(newDate);