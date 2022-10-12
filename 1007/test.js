function pw_check() {
    pw_desc.innerHTML = "영문자 대/소문자 특수문자, 숫자 포함 8 ~ 32자";
}

function ID_check() {
    if(id_box.value == '') {
        id_alert.innerHTML = "필수 입력 항목 입니다";
    } else id_alert.style.display = 'none';
}
function PW_check() {
    if(pw_box.value == '') {
        pw_alert.innerHTML = "필수 입력 항목 입니다"
    } else pw_alert.style.display = 'none';
}
function PW2_check() {   
    if(pw2_box.value == '') {
        pw2_alert.innerHTML = "필수 입력 항목 입니다"
    } else pw2_alert.style.display = 'none';
}