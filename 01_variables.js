const accountId = 144553
let accountEmail = "karan@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
// accountId = 2// not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212112"
accountCity = "Benguluru"

 console.log(accountId);

 /*
perfer not to use var 
because of issue in block scope and functionl scope 
 */

 console.table( [accountId, accountEmail, accountPassword, accountCity , accountState])
