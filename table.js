const accountId = 144553
let accountEmail = "Ameer@google.com"
var accountPassword = "01234"
accountCity = "banglore"
let accountState;
// accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Chennai"
console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])