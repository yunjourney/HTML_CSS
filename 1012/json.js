let memberInfo = [
    {
        name : "이영지",
        age : 21,
        job : "래퍼",
        addr : "서울시 강남구 역삼동"
    },
    {
        name : "이은지",
        age : 30,
        job : "코미디언",
        addr : "서울시 강남구 청담동"
    },
    {
        name : "안유진",
        age : 20,
        job : "아이브",
        addr : "서울시 강남구 신사동"
    }
];
console.log(memberInfo);

// stringify() : 리터럴 객체를 json으로 바꿔줌
let json = JSON.stringify(memberInfo);

// console.log(json);

// parse() : json을 리터럴 객체로 다시 바꿔줌
let objectJson = JSON.parse(json);
console.log(objectJson);

