// 문제 1
// 
// let score;
// while(true) {
//     score = prompt("성적 입력 : ", "");
//     score = Number(score);
//     if (score < 0 || score > 100) {
//         alert("입력 오류 : 성적을 다시 입력 하세요");
//     } else break;
// }
// if(score >= 90) document.write("<p class='score'>A</p>");
// else if (score >= 80) document.write("<p class='score'>B</p>");
// else if (score >= 70) document.write("<p class='score'>C</p>");
// else if (score >= 60) document.write("<p class='score'>D</p>");
// else document.write("<p class='score'>F</p>");


// // 문제 2
// // 정수 n을 입력 받아 n * n 행렬 출력하기
// let n = prompt("정수 입력 : ");
// n = Number(n);
// for(let i = 1; i <= n * n; i++) {
//     document.write("<span class=nbyn" + i + " " + "</span>")
//     if(i % n == 0) document.write("<br>");
// }


// 문제 3 
// 1 ~ 1000 사이의 7의 배수를 구하고 한 줄에 10개씩 출력하기
let cnt = 0;
for(let i = 1; i < 1000; i++) {
    if(i % 7 == 0) {  
        document.write("<span class='double'>" + i + "</span>");
        cnt++;
        if(cnt == 10) {
            document.write("<br>");
            cnt = 0;
        }
    }
}