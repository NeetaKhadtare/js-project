/*    Array
Having continues memory location for strping the data.
*/
const myArr=[0,1,2,3,4,5]
const colour=["red","blue","black","white","gray"]
/*
const myArr2=new Array(1,2,3,4,5)
console.log(myArr[0]);    //0
console.log(myArr2[2]);    //3
console.log(colour[3]);  //white

//Methods

myArr.push(6)   //add data in array
myArr.push(7)
console.log(myArr);

myArr.pop()   //delete data from array from last position
console.log(myArr);



myArr.unshift(9)        //added the data on forst position of array index
console.log(myArr);

myArr.shift()         //delete the first index data from the array
console.log(myArr);


console.log(myArr.includes(5));    //true
console.log(myArr.indexOf(6));     //-1 because the valuse is not in array so it gievs the -1 as answer

const newArray=myArr.join()
console.log(myArr);
console.log(typeof(newArray));
console.log(newArray);
*/

//slice, splice

console.log("A", myArr);
const myn1=myArr.slice(1,3) 
/* slice takes the eletemts of array from 1 to uto (3-1) rd index of array also it does not change the original array */

console.log(myn1);           //[ 1, 2 ]
console.log("B", myArr);    //B [ 0, 1, 2, 3, 4, 5 ]
 
const myn2=myArr.splice(1,3)    
/* slice takes the eletemts of array from 1 to uto 3 rd index of array also it change the original array (that means it delete the givin range elements from the array) */

console.log(myn2);         //[ 1, 2, 3 ]
console.log("C", myArr);   //C [ 0, 4, 5 ]
 