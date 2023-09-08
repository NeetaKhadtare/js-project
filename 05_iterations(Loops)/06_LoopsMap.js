/* Map itrratation

const coding=["js", "ruby", "java", "python", "cpp"]

const values=coding.forEach((item) => {
    return item
})

console.log(values);   //nothing is return 
 
to avoid this problem we use the following method
*/

const myNum=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNum.filter((num) => {
    return num>5    //filter() requires the return when we access the values out of scope
} )
console.log(newNums);

//another way
const newNumbers=[]
myNum.forEach((num) =>{
    if(num>4){
        newNumbers.push(num)
    }
})
console.log(newNumbers);

//Example of Books

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks= books.filter( (bk) => bk.genre === "History")

console.log(userBooks);

let latestBooks=books.filter( (item) => {
   return item.publish >= 1990 && item.genre === "Science"
})

console.log(latestBooks);

