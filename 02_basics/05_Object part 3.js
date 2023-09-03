const course={
    coursename:"JavaScript",
    price:"1000",
    courseInstructor:"Hitesh"
}

console.log(course.courseInstructor);  //Hitesh
//but this is not good to use for different or bulk of modules/ojects so we use the following...

const {courseInstructor}=course
console.log(courseInstructor);   //Hitesh

//we can the name of property also like,
const {courseInstructor:Instructor}=course
console.log(Instructor);         //Hitesh