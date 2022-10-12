// 길이 체크, 하이픈 체크
let jumin;
while(true) {
    jumin = prompt("주민번호 입력하세요", "");
    if (jumin.length != 14) {
        alert("ERROR! 다시 입력하세요.");
    } else {
        if(jumin.indexOf("-") == -1) alert("ERROR! 하이픈 누락되었습니다.");
        else break;
    }
}

// 성별 확인
let gender = jumin.charAt(7); // 문자열에서 해당 인덱스 문자를 추출
let genderStr;
if(gender == "1" || gender == "3") genderStr = "남성";
else genderStr = "여성";

// 나이 계산
let birthYear = jumin.substring(0, 2); // 주민에서 맨앞 2글자 잘라냄
if(gender == "1" || gender == "2") { // 1900년대에 태어난 남성, 여성
    birthYear = "19" + birthYear;
} else birthYear = "20" + birthYear; // 2000년대에 태어난 남성, 여성 
birthYear = Number(birthYear); // 계산을 위해 태어난 연도 문자열을 숫자로 변경

const date = new Date(); // 날짜 객체 만들기
const currYear = date.getFullYear(); // 2022 현재 연도
let age = currYear - birthYear; // 현재 연도에서 태어난 연도 빼면 나이가 나옴

document.write("<p class='box'> 성별 : " + genderStr + "<br>" + "나이 : " + age + "세 </p>");