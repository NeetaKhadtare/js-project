/* While 
 Syntax:
while(condition){
    statements....
}

*/

let index=0
while(index<=5){
    console.log(`Value of indx is ${index}`);
    index=index+2
}

let myArray=["pen","book","laptop","blackborad"]
let i=0
while(i<myArray.length){
    console.log(`Value of myArray is ${myArray[i]} on index ${i} of MyArray`);
    i=i+1
}

/*
Syntax:
do{

}whie(condition)
*/
 let score=11
 do{
    console.log(`Score is ${score}`);
    score++;
}while(score<=10)
