// let tmp = prompt("정수를 입력하세요 : ");
// let num = Number(tmp);
// let sum = 0;

// for(let i = 0; i <= num; i++) {
//     sum += i;
// }

// document.write("<h3> 입력 받은 정수의 합 : " + sum + " 입니다. </h3>");


// p 태그 id 값을 넣어서 웹에 출력해줌
// let name = "서울시 중구";
// document.getElementById("data").innerHTML = name;


// 입력 받은 숫자 범위에 포함된 소수의 합 구하기
// function primeMain() {
//     var sum = 0;
//     var number = document.getElementById('name').value;
//     for (var i = 0; i <= number; i++) {
//         sum += primeNumber(i);
//     }
//     document.write("= " + sum);
//     return 0;
// }

// function primeNumber(number) {
//     var cnt = 0;
//     for(var i = 1; i <= number; i++) {
//         if(number % i == 0) {
//             cnt++;
//         }
//     }   
//     if (cnt == 2) {
//         document.write(number + " + ");
//         return number;
//     } else {
//         return 0;
//     }
// }


// var test = 1.33;
// test = 2.333;
// console.log(test);


// document.write("<h1>" + name + "</h1>"); 
// document.write()는 웹에서 출력해줌
// console.log 는 콘솔창에 나타나는 것. node.js 때문에 웹에서 보이는 거임



// let currentYear = 2022;
// let birthYear;
// let age;

// birthYear = prompt("태어난 연도를 입력하세요 : (YYYY)", "");
// age = currentYear - birthYear + 1;
// document.write(currentYear + "년 현재 <br>");
// document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세 입니다.");



// 3개의 정수를 입력받아 가장 큰 수와 작은 수 구하기
// let a,b,c,tmp;
// let min, max;
// tmp = prompt("첫번째 수 입력 : ", "");
// a = Number(tmp); // 숫자형으로 명시해야함
// tmp = prompt("두번째 수 입력 : ", "");
// b = Number(tmp);
// tmp = prompt("세번째 수 입력 : ", "");
// c = Number(tmp);

// if(a > b) {
//     if(a > c) max = a;
//     else min = b;
// } else {
//     if(b > c) max = b;
//     else max = c;
// }
// if(a > b) {
//     if(b > c) min = c;
//     else min = b;
// } else {
//     if(a > c) min = c;
//     else min = a;
// }
// document.write("<h3>제일 큰 값 : " + Math.max(a,b,c) + "</h3>");
// document.write("<h3>제일 작은 값 : " + Math.min(a,b,c) + "</h3>");


// 멍청한 상근이 알람 ㅡㅡ
let tmp, hour, min, calc;
tmp = prompt("시 입력 : ", "");
hour = Number(tmp);
tmp = prompt("분 입력 : ", "");
min = Number(tmp);
calc = (hour * 60) + min;
if(calc < 45) {
    calc = (24 * 60) + min;
}
calc -= 45;
hour = parseInt(calc / 60);
min = calc % 60;
document.write("<h2>" + `${hour}시 ${min}분` + "</h2>"); // ` 백틱. ${변수}
// document.write("<h2>" + hour + "시" + min + "분" + "</h2>"); // 위랑 같은 의미앟ㅎ
