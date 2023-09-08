/* For Of loop
Syntax:
for (const iterator of object) { 
}
We are retrive the elements from the array and objects
["","",""] - array
[{},{},{}] - objects  
for this we are uses the fro of and for each loop
*/
const numbers=[1,2,3,4,5,6]

for (const num of numbers) {
    console.log(num);
}

const name="Neeta Raju Khadtare"
for (const i of name) {
    if(i === " "){
        continue
    }
    console.log(`Each charactor of name is : ${i}`);
}
/* For each loop
array.forEach(element => {
    
});
*/


//Map

const map=new Map()
map.set('name','Neeta')
map.set('age','28')
map.set('city','Pune')

//console.log(map);   
//Map(3) { 'name' => 'Neeta', 'age' => '28', 'city' => 'Pune' }

for (const [key, value] of map) {
    console.log(key ,`:-`, value);
}
/*
name :- Neeta
age :- 28
city :- Pune
*/
/*
const myObject={
    game1: "NFS",
    game2: "Chess"
}

for(const [key,value] of myObject){
    console.log(`Games ${value}`);
}

it genrate the error because we cannot irrrate the object
*/