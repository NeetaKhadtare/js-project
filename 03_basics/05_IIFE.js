//Immediately Invoked Function Expression (IIFE)
//used for the write the code which can be executed immediately after login etc.
//1. Named IIEF

(function chai(){
    console.log("DB connected");
})();              //semocolon ; is required for this function
//chai()

//() for defination  second () for call

//to avoid Global scope pollutions of varables we are uses the IIFE

//with arrow function
// 2. UNnamed IIEF

( () => {
    console.log("DB connected 2");
} ) ();

//3 Parameterised IIEF
( (name) => {
    console.log(`DB connected by ${name}`);
} ) ("Neeta");

