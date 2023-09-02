const accountId = 144553
let accountEmail = "ravi@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState; 

//accountId=2

accountEmail = "ravinee@gmail.com"
accountPassword = "123456"
accountCity = "Selu"     //we acn use this type but it is bad idea

console.log(accountId);

/* donot use var because of issuse in block and funtional code */
console.log(accountId,accountEmail,accountPassword)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

console.log(accountState);