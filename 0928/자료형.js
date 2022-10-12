// let test = 100;
// let test2 = 200;
// console.log("합 : " + (test + test2));
// console.log(`합 : ${test + test2}`);


// let dan = 3;
// let gugu = 8.1;
// let result = Math.round(dan * gugu);
// console.log(result);
// console.log(`${dan} 곱하기 ${gugu}은 ${dan * gugu}입니다.`);


let age, tmp = null;
let isAdult = false;
tmp = prompt("나이를 입력하세요 : ", "");
age = Number(tmp);

isAdult = (age > 18) ? true : false;
if (isAdult) document.write("<h3>당신은 성인입니다.</h3>");
else document.write("<h3>당신은 성인이 아닙니다</h3>");

// 1. 