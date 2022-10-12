let menu = [];
let tmp;
tmp = prompt("상덕버거 가격 입력 : ","");
menu[0] = Number(tmp);
tmp = prompt("중덕버거 가격 입력 : ","");
menu[1] = Number(tmp);
tmp = prompt("하덕버거 가격 입력 : ","");
menu[2] = Number(tmp);
tmp = prompt("콜라 가격 입력 : ","");
menu[3] = Number(tmp);
tmp = prompt("사이다 가격 입력 : ","");
menu[4] = Number(tmp);

for(let i = 0; i < menu.length; i++) {
    menu[i];
}
let minBurger = menu[0];
let minDrink = menu[3];
for(let i = 0; i < menu.length; i++) {
    if((i < 3) && (minBurger > menu[i])) minBurger = menu[i];
    if((i > 2) && (minDrink > menu[i])) minDrink = menu[i];
};
document.getElementById("value1").innerHTML = "버거 가격 " + minBurger + "원";
document.getElementById("value2").innerHTML = "음료 가격 " + minDrink + "원";
document.getElementById("value").innerHTML = "세트 가격 " + (minBurger + minDrink - 50) + "원";