let str = "Hello world !!! world!"; // 입력받은 문자열
const regEx = /world/; // 검사할 정규식
console.log(regEx.test(str)); // 대응하는 문자열이 있으면 true
console.log(str.search(regEx)); // 대응되는 첫번째 문자열의 인덱스 반환. 없으면 -1 반환

// exec() 메소드 : 인수로 전달된 문자열에서 패턴을 검색하여 일치하는 문자열 반환. 없으면 null
let inputStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
let regEx1 = /가장큰/g;
let result = regEx1.exec(inputStr);
console.log(result);

// 전화번호 유효 검사하기
let inputNum = "010-5006-4146";
const regEx2 = /\d{3}-\d{4}-\d{4}/; // \d (최소)숫자를 뜻함. {갯수} 숫자3개-숫자4개-숫자4개
let rst = regEx2.test(inputNum);
console.log(rst);

// 전화번호만 추출하기
let inputText = "Hi~! 저는 ks.jeong 이고, 전화번호는 010-5006-4146, 010-1234-5678 / 010-8888-9999입니다.";
// const regEx3 = /\d{3}-\d{4}-\d{4}/g; // g붙이면 매칭되는 항목을 모두 찾음 
// let regNum = inputText.match(regEx3);
// // console.log(regNum); // regNum[0] -> 010-5006-4146
// for(let e of regNum) console.log(e);

// 간단한 매칭
// const regex = /저는/;
// const regex = /010/g;
// const regex = /[0-9]/g; // 모든 숫자 찾기
// const regex = /[a-zA-Z]/g; // 모든 알파벳 찾기
const regex = /[^0-9]/g; // 숫자가 아닌 모든 문자 찾기
let rst1 = inputText.match(regex);
for(let e of rst1) console.log(e);