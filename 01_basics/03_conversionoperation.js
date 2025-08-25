let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)    
console.log(typeof valueInNumber);

/* "33" => 33
"33abc" => NaN
true => 1; false => 0
undefined => Nan
null => 0 */

let IsloggedIn = 1

let booleanIsLoggedIn = Boolean(IsloggedIn)
console.log(booleanIsLoggedIn);

/* 1 => true; 0 => false
"" => false
"nish" => true */

let somenumber = 33

let stringNumber = String(somenumber)
console.log(stringNumber);
console.log(typeof stringNumber);


//*****operations*****//

let value = 3
let negValue = -value

console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hey"
let str2 = "Nish"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true);
console.log(+true);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gamecounter = 100
gamecounter++;
console.log(gamecounter);