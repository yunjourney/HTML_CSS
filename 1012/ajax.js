// // XMLHttpRequest 방식
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); // test 서버 주소
// xhr.setRequestHeader("content-type", "application/json");

// // const data = {
// //     userId : 100,
// //     id : 100,
// //     title : "JSON 전송 테스트 해보기",
// //     author : "애몽실"
// // };
// // xhr.send(JSON.stringify(data)); // 괄호 비워두면 요청 전송(기본적인 정보들 요청)

// xhr.send(); 

// xhr.onload = () => { // send보내고 onload가 되면(정상적인 응답이 오면) 
//     if(xhr.status === 200 || xhr.status === 201) { // get에서 정상적인 응답이면 status가 200, post 정상응답은 201
//         const res = JSON.parse(xhr.response); // json 데이터를 객체로 변경
//         console.log(res);
//     } else {
//         console.error(xhr.status, xhr.statusText); // 응답 상태와 응답 메시지 확인
//     }
// }



// Fetch API 방식
// // id가 1인 데이터 조회
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((response) => response.json()) // 응답이 되면 첫번째 then불려짐
// .then((json) => console.log(json)); // json데이터가 변경이 완료되면 두번째 then불려짐

// // POST - 데이터 생성
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST", // HTTP 요청 방식
//     body: JSON.stringify({ // 전송할 데이터
//         title: "JSON Test",
//         body: "JSON과 비동기 통신에 대해서 연습해 봅시다.",
//         userId: 1
//     }),
//     headers: {
//         "content-type": "application/json; charset=UTF-8"
//     }
// })
// .then((response) => response.json())
// .then((json) => console.log(json));

// // PUT - 데이터 수정
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     body: JSON.stringify({
//         id: 1,
//         title: "배고프다",
//         userId: 1
//     }),
//     headrs: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
// .then((response) => response.json())
// .then((json) => console.log(json));

// // DELETE - 데이터 삭제
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "DELETE"
// });


// promise 방식
