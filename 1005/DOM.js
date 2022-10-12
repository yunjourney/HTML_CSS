// let doc = document.firstChild;
// console.log("doctype : " + doc);

// let html = document.firstElementChild;
// console.log("html : " + html);



// // id 속성값이 title인 요소 노드 선택
// const el = document.getElementById("title");
// console.log(el);

// // class 속성값이 text인 요소 노드 선택
// const clsEl = document.getElementsByClassName("text");
// console.log(clsEl[0]); // 유사 배열이라 배열의 인덱스로 사용가능
// console.log(clsEl[1]);
// for(let el of clsEl) console.log(el);

// // tag 값이 p 인 요소 노드 선택
// const tagEl = document.getElementsByTagName("p");
// for(let el of tagEl) console.log(el);



// // CSS의 선택자 사용하기 - query 메소드
// const el = document.querySelector(".box-1");
// console.log(el);

// const el_1 = document.querySelectorAll(".box-1 .text");
// for(let el of el_1) console.log(el);



// // 노드 조작하기 : 컨텐트 조작하기
// let txtCon = document.getElementById("title").textContent = "<h1>가을은 싫어요</h1>"; // 보이든 보이지않든 모든 텍스트 접근
// let inTxt = document.getElementById("title").innerText = "<h1>날씨가 추워요</h1>"; // 웹브라우저에 표시되는 텍스트 접근
// let inHtml = document.getElementById("title").innerHTML = "날씨가 좋아요"; // HTML을 포함한 텍스트 접근

// inHtml = "안녕하세요. 오늘은 완전 가을 날씨입니다."

// console.log(txtCon); // Hello, JavaScript!!
// console.log(inTxt); // Hello,
// console.log(inHtml); // HTML까지 모두 표시됨



// 노드 조작하기 : 스타일 조작하기 (<노드>.style.css속성명 = <속성값>)
// const pE1 = document.querySelector("#text");
// pE1.style.backgroundColor = "#ff0000";
// pE1.style.fontSize = "20px";
// pE1.style.color = "#ffffff";
// pE1.style.fontWeight = "bold";

// const elId = document.querySelector("#text");
// elId.classList.add("active", "orange-color", "box"); // classLIst.add("스타일1", "스타일2"...)



// 메서드 속성으로 조작하기
// const aEl = document.querySelector("a"); // a태그를 가져옴
// const href = aEl.getAttribute("href"); // a태그에 있는 속성 중에 href의 '값'을 가져옴
// // console.log(href); // http://www.google.co.kr
// aEl.setAttribute("href", "http://kakao.com"); // href 속성의 값 변경
// aEl.innerText = "카카오"; // 텍스트 변경



// 노드 추가하기
// const aEl = document.createElement("a");
// document.body.appendChild(aEl);
// const test = document.querySelector("a");
// test.innerHTML = "테스트";
// test.setAttribute("href", "http://naver.com");
// document.body.removeChild(aEl); // 노드 삭제하기



// 폼 조작하기
