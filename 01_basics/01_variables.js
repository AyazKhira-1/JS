const accountId = 1234
let accountEmail = "ayaz@gmail.com"
var accountPassword = "1234"
accountCity = "city1"
let accountState;

// accountId = 2 // not allowed

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

accountEmail = "ayaz1@gmail.com"
accountPassword = "1234556"
accountCity = "City2"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

/*
1234
┌─────────┬──────────────────┐
│ (index) │ Values           │
├─────────┼──────────────────┤
│ 0       │ 1234             │
│ 1       │ 'ayaz@gmail.com' │
│ 2       │ '1234'           │
│ 3       │ 'city1'          │
│ 4       │ undefined        │
└─────────┴──────────────────┘
┌─────────┬───────────────────┐
│ (index) │ Values            │
├─────────┼───────────────────┤
│ 0       │ 1234              │
│ 1       │ 'ayaz1@gmail.com' │
│ 2       │ '1234556'         │
│ 3       │ 'City2'           │
│ 4       │ undefined         │
└─────────┴───────────────────┘
*/