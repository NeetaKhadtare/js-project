/* For Loop 
syntax:

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
*/

for (let index = 0; index < 5; index++) {
    const element = index;
    console.log(element);
}

//console.log(element);  //not allowed because of scope of element variable

for (let index = 0; index < 8; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is best");
    }
    console.log(element);
}

for (let i = 1; i< 5; i++) {
    console.log(`Outer loop ${i}`);
    for (let j= 1; j<=10; j++) {
        //console.log(`Inner loop ${i} and ${j}`);
        console.log(i+`*`+j+`=`+i*j);
    }
}

let myArray=["bat","ball","tennis ball","chess"]

for (let i= 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

//keyword break 

for (let index = 1; index < 10; index++) {
    if(index == 5){
        console.log("Dected 5");
        break;
    }
    console.log(`value of i is ${index}`);
}

//and continue

for (let index = 1; index < 10; index++) {
    if(index == 5){
        console.log("Dected 5");
        continue;
    }
    console.log(`value of i is ${index}`);
}