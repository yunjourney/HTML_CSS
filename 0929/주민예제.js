let jumin = prompt("주민등록번호 입력 ('-' 하이픈 포함)", "950105-2101234");
year = jumin.substring(0,2);
gender = jumin.substring(7,1);
let genderStr;
year = Number(year);
now = new Date();
currYear = now.getFullYear();
let age = currYear - year;

if(jumin.length!=14) {
    alert("주민번호가 잘못 입력되었습니다.");
} else {
    if (gender == 1 || gender == 3) {
        genderStr = "남성";
    } else {
        genderStr = "여성";
    }
    if (gender == 1 || gender == 2) {
        year = (year - 1900);
    } else { 
        year = (year - 2000);
    }
} // 자꾸 19 20 붙어서 나옴 나이에 

document.write("<p>성별 : " + genderStr + "<br>" + "나이 : " + age + "세 </p>");