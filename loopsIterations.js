// level {2}
// 0 1 1 2 3 5 8

let number = 6;

let number1 = 0;
let number2 = 1;

let number3;
let sum = 0;

for (i=1 ; i <= number; i++){
    number3 = number1 + number2;
    number1 = number2;
    number2 = number3;
    sum = sum + number1;
} console.log(sum)
