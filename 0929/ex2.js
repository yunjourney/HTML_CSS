// let desc = "안녕하세요. \/ \/ \/ \\ \n저는 \"곰돌이\t사육사\" 입니다.^0^";
// console.log(desc);
// // 템플릿 문자열 : ` = 백틱. `${변수}` (`문자열`) | "문자열" '문자열'
// console.log(`백틱을 사용해 봅시다 ----> ${desc} <----`);
// console.log("백틱을 사용해 봅시다 ----> " + desc + " <----");


// // 배열 기본 : 대괄호로 묶어서 생성
// // 배열의 접근은 인덱스로 한다. (0부터 시작)
// let score = [80, 99, 77, 65];
// console.log(score[1]);
// console.log(typeof(score));


// for(let i = 0; i < score.length; i++) {
//     console.log(`배열의 ${i}번째 값은 ${score[i]} 입니다.`);
// }


// // 자바의 배열과 다른 부분
// // 1. 여러가지 자료형을 포함할 수 있음
// // 2. 배열 내에 배열을 넣을 수 있음
// const array = ["아이브", "안유진", 20, true, [100, 88, 99], ["블랙핑크", "아이브", "뉴진스", "에스파", "잇지", "2NE1"]];
// // console.log(array[5][5][2]); // array[4] => [100, 88, 99] | [4][1] => 88 | [0][2] => 브 | [5][5][2] => E
// array[0] = "뉴진스";
// console.log(array);


// // 객체 리터럴 : 키와 값으로 구성, 중괄호로 만듦
// let score = [88, 77, 65, 86]; // 국, 영, 수, 과
// console.log(score);

// let scoreObject = [
//     {
//         korScore : 88,
//         engScore : 77,
//         matScore : 65,
//         scnScore : 86
//     },
//     {
//         korScore : 43,
//         engScore : 75,
//         matScore : 95,
//         scnScore : 100
//     },
//     {
//         korScore : 99,
//         engScore : 100,
//         matScore : 100,
//         scnScore : 98
//     }
// ];
// console.log(scoreObject[1]);

// for(let i = 0; i < scoreObject.length; i++) {
//     console.log(`${i}번째 사람의 국어 성적 : ${scoreObject[i].korScore}`);
//     console.log(`${i}번째 사람의 영어 성적 : ${scoreObject[i].engScore}`);
//     console.log(`${i}번째 사람의 수학 성적 : ${scoreObject[i].matScore}`);
//     console.log(`${i}번째 사람의 과학 성적 : ${scoreObject[i].scnScore}`);
//     console.log("----------------------------");
// }


// let name = {
//     city : ["서울", "부산", "인천", "대구", "대전", "광주"],
//     fruit : ["바나나", "사과", "오렌지", "포도", "딸기"]
// }
// for (let key in name) {
//     console.log(`${key} : ${name[key]}`);
// }


// // 연산자 : 제곱 연산자 (**)
// let num = 10;
// console.log(2 ** 10); // 제곱 연산자
// // Math.floor() : 소수점 날려버림
// console.log(Math.floor(num / 3));
// console.log(num % 3); // 나머지 연산자 

// // 대입 연산자와 복합 대입 연산자
// let num2 = 10;
// console.log(num2 += 2); // num2 = num2 + 2

// // 비교 연산자
// console.log(10 == "10"); // true (값 비교)
// console.log(10 === "10"); // false (값과 자료형이 모두 같은지 비교)
// console.log(10 !== "10"); // true (값과 형이 다른지 비교)
// console.log(10 > "9"); // true
// console.log("Javascript" < "javascript"); // true (아스키 코드값 비교, 소문자가 더 큼)

// 형 변환
let num1 = 10 + "10";
let num2 = 10 + Number("10");
console.log(num1); // 1010 (묵시적 형변환)
console.log(num2); // 20 (명시적 형변환)

let name = 10 + String(20);
console.log(name); // 1020 (숫자형을 명시적으로 문자형으로 형변환)
