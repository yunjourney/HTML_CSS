const REGID = /^[a-zA-z0-9]{8,19}$/g;
function id_check() {
    if(!REGID.test(idInputBox.value)) {
        idError.style.display = 'unset';
        idError.innerHTML = "대소문자,숫자 포함 8자리 이상 20자리 이하입니다."
    } else(idError.style.display = 'none') };
idInputBox.addEventListener("keyup",id_check);


const REGPW = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
function pw_check() {
    if(pwInputBox.value.length< 8 || pwInputBox.value.length >20) {
        passwordError.style.display = 'unset';
        passwordError.innerHTML = "8자 이상 20자 이내로 입력해주세요";
    } else if(!REGPW.test(pwInputBox.value)) {
        passwordError.style.display = 'unset';
        passwordError.innerHTML = "대소문자,숫자,특수문자 포함입니다"
    } else { passwordError.style.display = 'none'; }};
pwInputBox.addEventListener("keyup",pw_check);


const REGEMAIL = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
function email_check() {
    if(!REGEMAIL.test(emailInputBox.value)) {
        emailError.style.display = 'unset';
        emailError.innerHTML = "이메일 형식에 맞지않습니다";
    } else(emailError.style.display = 'none') };
emailInputBox.addEventListener("keyup",email_check);


const REGTEL = /\d{3}-\d{4}-\d{4}/;
function tel_check() {
    if(!REGTEL.test(telInputBox.value)) {
        telError.style.display = 'unset';
        telError.innerHTML = "하이픈을 포함하여 입력해주세요";
    } else(telError.style.display = 'none') };
telInputBox.addEventListener("keyup",tel_check);

function join_submit() {
    if (email_check.value) {
    document.getElementById("joinBtn").disabled = false;
    } else document.getElementById("joinBtn").disabled = true;
}
