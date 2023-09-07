/* Switch case

Syntax:

switch(Key){
        case value 1:
            statements.....
            break;
        case value 2:
            statements....
            break;
        deafult:
        brrak;
        
}
*/
const month=3

switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:{
            console.log("March");
            break;
        }
    case 4:{
            console.log("April");
            break;
    }
    default:{
            console.log("Enter month");
            break;
    }
}