// 함수
// 1. 특정 작업을 여러번 반복 수행해야하는 경우 재사용 목적으로 만듦
// 2. 특정 이벤트 발생 시 기능을 동작하게 할 수 있음
// 함수 선언식으로 생성
// let sum1 = sum(100, 200);
// console.log(sum1); // 호이스팅(끌어올림) 관계때문에 호출이 먼저 나오고 
// 뒤에 함수 선언있어도 함수는 순서 맨 앞으로 가서 동작

// function sum(n1, n2) {
//     document.write("<h1>" + (n1 + n2) + "</h1>");
// }

// function sub(n1, n2) {
//     document.write("<h1>" + (n1 - n2) + "</h1>");
// }

let firstVal;
let secondVal;
let op;
function inputFst(num) {
    firstVal = num;
}
function inputSec(num) {
    secondVal = num;
}
function inputOp(operator) {
    op = operator;
}
function inputEnter(num) {
    switch(op) {
        case "+" :
            document.write("<h1>" + (firstVal + secondVal) + "</h1>");
            break;
        case "-" :
            document.write("<h1>" + (firstVal - secondVal) + "</h1>");
            break;
        case "*" :
            document.write("<h1>" + (firstVal * secondVal) + "</h1>");
            break;
        case "/" :
            document.write("<h1>" + (firstVal / secondVal) + "</h1>");
            break;
    }
}

// 함수 선언식 : 함수를 선언하고 호출부 별도 존재, 호출을 아무 곳에서나 호출가능
// sum(100, 200);
// function sum(p1, p2) {
//     return p1 + p2;
// }

// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식. 함수가 만들어질 때 주소를 대입해서 호이스팅 불가
// console.log(sum(100, 200)); // 불가능
// let sum = function(p1, p2) {
//     return p1 + p2;
// }


// const gugudan = function() {
//     for(let i = 1; i < 10; i++){
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// }

// let test = gugudan; // 주소를 복사
// test();


// // 함수 표현식
// const gugudan1 = function(dan) {
//     for (let i = 1; i < 10; i++) {
//         console.log(`${dan} * ${i} = ${dan * i}`);
//     }
// }

// // 람다식 화살표 함수
// const gugudan2 = (dan) => {
//     for (let i = 1; i < 10; i++) {
//         console.log(`${dan} * ${i} = ${dan * i}`);
//     }
// }


// 함수 및 변수의 스코프 이해
// 함수 스코프 방식 : 함수에서 정의한 블록문만 스코프(유효 범위)로 간주
// let a = 10; // 여기는 내부,외부 모두 호출O
// function sum() {
//     let a = 10; // 여기 넣으면 외부에서는 호출X 에러뜸
//     console.log(`함수 내부 : ${a}`);
// }
// sum();
// console.log(`함수 외부 : ${a}`);

// // 블록 스코프 방식 : ES6부터 추가된 개념. java방식. 
// let a = 10; // 전역
// // const a = 10; // 상수이므로 가능하나 블록내에서 재정의는 안됨
// // var a = 10; // 호이스팅 적용되어 코드블록외부b도 출력됨! 함수 스코프 방식을 따른다.
// {
//     let a = 100; // 블록 내에 있는 지역변수가 우선이라 이걸로 값이 재정의됨
//     let b = 20;
//     console.log(`코드 블록 내부 a : ${a}`);
//     console.log(`코드 블록 내부 b : ${b}`);

//     // var b = 20; // undefined. 선언부만 올라가고 값은 대입안된 상태. 
// }
// console.log(`코드 블록 외부 a : ${a}`); // 전역변수에 있는 10으로 출력
// //console.log(`코드 블록 외부 b : ${b}`); // let, const는 ERROR. var는 가능.


// // 즉시 실행 함수
// // 함수 표현식으로 익명의 함수 만들기
// // 한번 쓰고 버리는 함수.. 굳이 사용 안 함.
// const init = function() {
//     console.log("initialize !!!!!");
// }
// init();

// 이게 즉시 실행 함수
// (function init() {
//     console.log("initialize !!!");
// })();


// 콜백 Callback 함수 : 함수의 매개변수로 함수를 전달하는 방식
// 자바스크립트에서 비동기적인 매카니즘을 지원
// 자바스크립트는 싱글쓰레드 언어이기 때문에 쓰레드가 Blocking 되는 현상을 막고 Non-blocking되도록 함
function cry() {
    console.log("Cry....ㅠㅠ");
}
function sing() {
    console.log("Sing~!");
}
function dance() {
    console.log("dance dance !!")
}
function checkMood(mood) {
    if(mood === "good") sing();
    else cry();
}
// checkMood("good");
// checkMood("sad");

// // 콜백 함수
// function checkMoodCallback(mood, goodCall, badCall) {
//     if(mood === "good") goodCall();
//     else badCall();
// }
// checkMoodCallback("bad", dance, sing); // good이면 dance, bad면 sing

// // 기본값 할당(a랑 b에 따로 값이 안들어오면 default로 쓰겠다.)
// function sum(a = 10, b = 0) {
//     console.log(a + b);
// }
// sum(100);


function 상품구매(항목, 가격, 수량, callback) {
    console.log(항목 + "상품을 " + 수량 + "개 구매하였습니다.");
    setTimeout(function() {
        console.log("계산이 필요합니다.");
        let 전체금액 = 가격 * 수량;
        callback(전체금액);

    }, 2000); // 2초
}
function 지불금액(금액) {
    console.log("지불 할 금액 : " + 금액 + "원 입니다.");
}

상품구매("밤고구마", 1000, 5, 지불금액);