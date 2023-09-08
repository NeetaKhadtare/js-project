 /* for each () loop
Syntax:
array.forEach(element => {  
});
Foreach() rquires call back function 
*/
const codding=["js","C","CPP","Python"]
//1. call back function
codding.forEach( function (item){
    console.log(item);
})

//2. using arrow function

codding.forEach( (item) => {
    console.log(item);
})

//3. another way

function printMe(item){
    console.log(item);
}
codding.forEach(printMe)

//4. 
codding.forEach((item, index, arr)=>{
    console.log(item,index,arr);
})
// below is used for the database
const mycoding=[    //array of Objects
    {
        langName: "Java",
        file:"one.js",
    },
    {
        langName:"C++",
        file:"two.cpp"
    }
]
//fetching the objects data from array of objects
mycoding.forEach((item)=>{
    console.log(item.langName);
})
