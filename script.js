// 1
let number = 0;
while (number <= 10){
    console.log(number);
    number += 1;
}
// 2
for (let i = 0; i <= 20; i += 2){
    console.log(i)
}
// 3
for (let i = 0; i <= 10; i += 1){
    console.log(i * 7);
}
// 6
let n = 15;
let num = 0;
while (true){
    if (num >= n){
        break;
       }
       num += 1;
       console.log(num);
}
// 7
let min = 0;
while (min <= 20){
    min += 1;
    if (min % 3 === 0){
        continue;
    }
    console.log(min);
}