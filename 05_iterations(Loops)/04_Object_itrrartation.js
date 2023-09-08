//Object itrration using forin() loop

const myObject={
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
    html:"Hyper Text Manipulation Language"
}

for (const key in myObject) {
    /*console.log(key);    //js cpp rb html
    console.log(myObject[key]);
    o/p: js  JavaScript
    cpp  C++
    rb  Ruby
    html  Hyper Text Manipulation Language */
    console.log(`${key} stands for the ${myObject[key]}`);
}

const ProgramLang=["C","C++","Java","JavaScript","Html","Python"]
console.log("Programming Languages are:");
for(const key in ProgramLang){
    /*console.log(key);  
     o/p 0 1 2 3 4 5 which default key for array */
    console.log(`${key} ${ProgramLang[key]}`);
}

