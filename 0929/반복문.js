// let brands = ["애플", "구글", "페이스북", "테슬라", "삼성전자"];
// for(let i = 0; i < brands.length; i++) {
//     console.log(brands[i]);
// }

// // for-in : 배열뿐만 아니라 object에서도 사용 가능
// let person = {
//     fname : "찬호",
//     lname : "정",
//     age : 24
// };

// for(let key in person) {
//     console.log(`${key}의 값은 ${person[key]}`); // 오브젝트 key에 해당하는 값을 출력
// }


// // for-of : 자바의 향상된 for문과 같음
// for(let e of brands) console.log(e);

// let lang = "JavaScript";
// for(let e of lang) console.log(e);


// // 이중 for문
// for(let i = 2; i < 10; i++) {
//     document.write("<table>");
//     document.write("<tr><th>" + i + "단</th></tr>")
//     for(let j = 1; j < 10; j++) {
//         document.write("<tr><td>" + i + " x " + j + " = " + (i*j) + "</td></tr>");
//     }
//     document.write("</table>")
// }


// while문
let treeHit = 0;
while (treeHit < 10) {
    treeHit++;
    document.write("<p>나무를 " + treeHit + "번 찍었습니다.</p>");
    if(treeHit == 10) {
        document.write("<h2>나무가 넘어갑니다~!</h2>");
    }
}