// 객체 리터럴로 객체를 생성하는 방법 ( key : value )
// let memberInfo = {
//     name: "유나",
//     age: 20,
//     addr: "경기도 수원시",
//     gender: "여성"
// };
// console.log(memberInfo);
// { name: '유나', age: 20, addr: '경기도 수원시', gender: '여성' }



// 생성자로 객체를 생성하는 방법
// function MemberInfo(name, age, addr, gender) {
//     this.name = name;
//     this.age = age;
//     this.addr = addr;
//     this.gender = gender;
// }
// let memberInfo = new MemberInfo("유나", 20, "경기도 수원시", "여성");
// let memberInfo1 = new MemberInfo("예지", 20, "서울시", "여성");

// console.log(memberInfo1);



// object.create로 생성하는 방법
// 지정된 프로토타입 객체와 프로퍼티를 가지고 새로운 객체를 만들어 줌
// let member = Object.create(Object.prototype, {
//     name: {
//         value: "유나",
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     age: {
//         value: 20,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     addr: {
//         value: 경기도,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     gender: {
//         value: "여성",
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// });
// console.log(member);



// function Circle(center, radius) { // 함수 선언식
//     this.center = center; // 프로퍼티
//     this.radius = radius;
//     // this.area = function() { // 함수 표현식
//     //     return Math.PI * this.radius * this.radius;
//     // }
// }
// // let c1 = new Circle(1, 1.0);
// // let c2 = new Circle(2, 3.0);
// // let c3 = new Circle(3, 4.0);
// // console.log(c1.area());

// Circle.prototype.area = function() {
//     return Math.PI * this.radius * this.radius;
// }

// let c1 = new Circle(1, 2.0);
// let c2 = new Circle(2, 2.0);
// let c3 = new Circle(3, 2.0);
// console.log(c1.area());



// 프로토 타입 상속
// 자바 스크립트는 프로토타입 상속에 기반을 둔 객체지향 언어 입니다.
// let objA = {
//     name: "Tom",
//     sayHello: function() {
//         console.log("Hello!! " + this.name);
//     }
// };
// let objB = {
//     name: "Jerry"
// };
// objB.__proto__ = objA;
// let objC = {};
// objC.__proto__ = objB;
// objC.sayHello();



// let person = {
//     name : {
//         firstName : "유진",
//         lastName : "안"
//     },
//     age : 20,
//     isAdult : true,
//     printInfo : function() {
//         return this.name;
//     }
// };
// // 객체에 대한 속성(프로퍼티, 함수)에 대한 접근은 . 연산자를 사용하거나 []사용
// console.log(person.name);
// console.log(person["name"]);
// console.log(person.printInfo()); // 함수일 때 내부값 불러오려면 () 붙여야 위와 동일하게 출력됨

// // 객체의 속성값 변경하기
// person.name.firstName = "Youjin";
// person.name.lastName = "Ahn";
// console.log(person.name);



// // 객체 속성을 동적으로 추가하기
// const carInfo = {} // 빈 객체 생성
// carInfo.name = "페라리";
// carInfo.year = "2022/10/04";
// carInfo.maxSpeed = "250Km";
// console.log(carInfo);

// // 객체 속성을 동적으로 삭제하기
// delete carInfo.year;
// console.log(carInfo);

// 자바스크립트의 깊은 복사 : 기본 자료형에서는 변수 자체에 값이 저장됨
// 기본자료형끼리 복사를 하면 깊은 복사
// let num = 10; // Number형이므로 변수에 값이 저장됨
// let copyNum = num; // 깊은 복사
// console.log(typeof(copyNum));

// // 얕은 복사 : 참조 자료형에서는 변수 공간에 데이터가 저장되는 것이 아니고
// //             데이터가 위치한 주소가 저장됨. 참조 자료형을 복사하면 값이 아닌 주소가 복사됨.
// // const car = "소나타"; // 상수이므로 한번 값이 대입된 후는 read only. 못바꿈
// // car = "싼타페"; 

// const car = {
//     name : "소나타"
// };
// // car = {
// //     name : "싼타페"
// // }; // 이것도 마찬가지로 error
// car.name = "싼타페";
// console.log(car.name); // 내가 가르키고 있는 참조형 변수(주소값)이라 변경됨

// let car = {
//     name : "아우디"
// };
// //console.log(typeof(car)); // {}, [] object 타입
// let car2 = car; // car2도 object 
// car.name = "제네시스";
// console.log(car2.name); // 제네시스 (얕은복사=주소복사)



// // 표준 내장 객체 : 자바스크립트에서 개발 편의를 위해 수많은 객체가 미리 만들어져 있음
// // 스코프에 상관없이 모든 영역에서 공통으로 사용할 수 있음
// const pw = "123";
// if(pw.length < 4) { // 문자열 길이 확인
//     console.log(pw.length + " <- 비밀번호는 최소 4자리 이상으로 입력");
// }

// // 특정 문자열 포함 여부 확인 : include(), indexOf()
// // include() : true/false로 반환
// const email = "test!name.com";
// if(email.includes("@") === false) {
//     console.log("올바른 이메일 형식이 아님");
// }

// // indexOf() : 해당 문자열의 인덱스를 반환, 없으면 -1
// const email2 = "test!name.com";
// if(email2.indexOf("@") === -1) {
//     console.log("올바른 이메일 형식이 아님");
// }

// // slice() : 시작 위치와 종료 위치를 지정하면 문자열에서 해당 부분을 잘라서 반환
// let str = "Apple, Banana, Kiwi";
// let result = str.slice(7, 13); // 해당 인덱스부터 지정 인덱스 미만까지 (7~12자리)
// console.log(result); // Banana

// // substring() : 시작 위치와 종료 위치를 지정하면 잘라서 반환
// let str2 = "Apple, Banana, Kiwi"; 
// let result2 = str2.substring(15);
// console.log(result2);

// // replace() : 문자열 내의 특정 문자열을 지정한 문자열로 변경
// let str3 = "지구오락실, 이영지, 안유진, 미미, 이은지";
// let newStr = str3.replace("이은지", "나영석");
// console.log(newStr);

// // toUpperCase(), toLowerCase() : 대문자, 소문자 변경
// // concat() : 2개 이상의 문자열을 하나의 문자열로 합치는 함수
// let txt1 = "Hello";
// let txt2 = "JavaScript";
// // let txt3 = txt1 + " " + txt2;
// let txt3 = txt1.concat(" ", txt2);
// console.log(txt3);

// // trim() : 문자열 앞, 뒤의 공백만 제거
// let str4 = "        Hello     JavaScript trim   ";
// console.log(str4.trim());

// // padStart(), padEnd() : 문자열 앞과 뒤에 채울 문자를 추가
// let str5 = "55";
// str5 = str5.padStart(4, 0); // 총 길이를 정하고 입력받은 문자열에서 남는 공간을 채움
// console.log(str5); // 0055

// // charAt() : 문자열에서 특정 인덱스에 해당하는 문자를 반환하는 함수
// let addr = "서울시 강남구 역삼동 KH정보교육원";
// console.log(addr.charAt(2)); // 시
// console.log(addr.charCodeAt(12)); // 해당 유니코드값 반환 (K = 75 아스키코드. 128자까지는 아스키코드=유니코드 동일)

// // split() : 특정문자 기준으로 문자열을 분리
// let birthday = "1997-06-12";
// let arr = birthday.split("-"); // 배열로 나눠서 담는다
// console.log(arr); // [ '1997', '06', '12' ]



// // Number 객체 : 숫자 관련 작업(형 변환)을 위해 사용되는 메소드
// console.log(Number.parseFloat("12")); // 12 문자열을 실수로 변환 
// console.log(Number.parseFloat("12.33")); // 12.33

// console.log(Number.parseInt("12.33")); // 12 문자열을 정수로 변환
// console.log(Number.parseInt("12kk")); // 12
// console.log(Number.parseInt("kk11")); // NaN (Not a Number)



// // array 객체 : 배열을 다루는 메소드
// // 비파괴적인 메소드인 forEach()
// const arr = [10, 20, 30, 40, 50];
// arr.forEach(x => console.log(x)); 
// // arr.forEach(function(e){
// //     console.log(e)
// // });

// // toString() : 배열 안의 문자를 쉼표를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString()); // Banana,Orange,Apple,Mango

// // join() : 배열 안의 모든 문자열을 지정한 문자를 이용해 결합
// let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits1.join("*")); // Banana*Orange*Apple*Mango 비파괴적인 메소드 (원본이 변경되지 않음)
// console.log(fruits1); // [ 'Banana', 'Orange', 'Apple', 'Mango' ] 

// // pop() : 배열에서 마지막 데이터를 제거하고 반환 (스택)
// let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits2.pop[0]);
// console.log(fruits2);

// // push() : 새로운 요소 추가 (스택)
// let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
// fruits3.push("kiwi");
// console.log(fruits3);

// // shift() : 배열의 첫번째 요소를 제거하고 반환
// let fruits4 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits4.shift());
// console.log(fruits4);

// // unshift() : 배열의 첫번째 요소에 값을 추가하고 배열의 길이를 반환
// let fruits5 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits5.unshift("Lemon"));
// console.log(fruits5);

// // 배열의 요소의 변경
// for (let i = 0; i < fruits.length; i++) {
//     // console.log("For 문 순회 " + fruits[i])
//     fruits[i] = "사과";
// }; // 실제 내부요소 바뀜

// // 자바의 향상된 for문과 동일 : 요소의 값을 변경해도 원본 배열은 변경되지 않음
// for (let e of fruits) {
//     e = "딸기";
//     console.log("for of : " + e);
// } // 딸기로 변경된 걸로 보이지만 실제 내부요소 바뀌진 않음

// // concat() : 2개 이상의 배열을 하나의 배열로 결합
// let arr1 = ["사과", "딸기", "참외"];
// let arr2 = ["포도", "수박", "바나나"];
// let arr3 = ["키위", "망고", "오렌지"];
// let arr4 = ["복숭아", "체리", "리치"];
// let total = arr1.concat(arr2, arr3, arr4);
// console.log(total);

// // slice() : 해당 인덱스부터 끝까지 잘라냄
// // 매개변수가 2개이면 시작 인덱스부터 종료 인덱스번호까지 잘라냄
// let coffee = ["아아", "라떼", "카페모카", "아인슈페너", "플랫화이트"];
// console.log(coffee.slice(3)); // ['아인슈페너', '플랙화이트']
// console.log(coffee.slice(2,4)); // ['카페모카', '아인슈페너'] 시작 인덱스에서 종료 인덱스 미만까지

// // sort() : 정렬(오름차순 디폴트)
// let coffee1 = ["아아", "라떼", "카페모카", "아인슈페너", "플랫화이트"];
// console.log(coffee1.sort());
// console.log(coffee1.reverse()); // 내림차순

// // filter() : 비파괴적인 메소드, 조건에 맞는 값을 추출해 새로운 배열 생성, 자주 사용됨
// let persons = [
//     {
//         name : "유재석",
//         point : 78,
//         city : "서울"
//     },
//     {
//         name : "김종국",
//         point : 92,
//         city : "서울"
//     },
//     {
//         name : "양세찬",
//         point : 76,
//         city : "제주"
//     },
//     {
//         name : "하하",
//         point : 81,
//         city : "경기"
//     }
// ];

// let pass = persons.filter(e => e.point > 80); // e라는 이름 아무거나 해도 됨(요소선택자)
// let pass1 = persons.filter(e => e.city === "서울");
// console.log(pass1);



// // 날짜와 시간을 다루는 Date 객체
// const date = new Date();
// console.log(date);

// const date1 = new Date(2022, 10, 04);
// console.log(date1);

// const date2 = new Date(2022, 10, 04, 16, 20, 50);
// console.log(date2);

// const date3 = new Date("2023-01-05"); // 원하는 날짜로 입력됨
// console.log(date3);

// const date4 = new Date("2022/12/25/18:30:50"); // 원하는 날짜, 시간으로 입력됨
// console.log(date4);

// console.log(date.getFullYear()); // 2022 연도 출력
// console.log(date.getMonth()+1); // getMonth()는 배열인덱스로 반환 됨! +1 해줘야함 (안하면 9로 나옴 = 10월)



// set 객체 : 중복 허용하지 않는 특성을 가짐
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
console.log(mySet.size); // 3
console.log(mySet); // Set(3) { 1, 2, 3 }



// Map 객체 : 키와 값을 맵핑 시켜서 값을 저장하고 저장된 순서대로 요소에 접근
let map = new Map();
map.set("name", "유나");
map.set("email", "yuna@gmail.com");
map.set("age", 20);
map.set("addr", "경기도 수원시");

console.log(map.size); // 4
console.log(map.get("name")); // 유나. key에 대한 값을 반환
console.log(map.has("email")); // true. 존재 여부 확인
map.delete("name");

map.forEach(e => console.log(e)); // name 삭제된걸로 출력



// Math 객체 : 수학 연산을 다루는 객체
const floatNum = 10.49;
console.log(Math.floor(floatNum)); // 10 소수점 이하를 내림
console.log(Math.ceil(floatNum)); // 11 소수점 이하를 올림
console.log(Math.round(floatNum)); // 10 소수점 반올림

// Math.random() : 0보다 크고 1보다 작은 숫자형 값을 반환
let rand = Math.floor(Math.random() * 10) + 1; // 1 ~ 10 사이의 난수

while(true) {
    let rand = Math.floor(Math.random() * 10) + 1;
    console.log("생성된 랜덤값은 " + rand + " 입니다.");
    if(rand == 10) break;
}