"use strict";
//<--Конвертация
function tc2tf(tc) {
    let tf = (9 / 5) * tc + 32;
    return tf;
}
//-->
const defaultTemp="40";
let tc = Number(prompt("Ввкдите температуру в Cº", defaultTemp));
let tf = tc2tf(tc);

alert(`Темпераьурв ${tc}Cº ровна ${tf}Fº`);