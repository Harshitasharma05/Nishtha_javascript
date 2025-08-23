/*constant*/const accountId = 144553
/*variable*/let accountEmail = "nishtha35@google.com"
/*variable*/var accountPaswword = "36387" /* prefer not to use var because of issue in block scope and functional scope
/*variable*/accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "hs@hs.com"
accountPaswword = "356267672"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountEmail, accountId, accountPaswword, accountCity, accountState])