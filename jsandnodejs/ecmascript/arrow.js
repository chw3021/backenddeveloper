/*자바스크립트는 함수를 선언할 때 function 키워드로 다음과 같이 선언한다.
(형식)
function 함수명(매개변수1, 매개변수2, ..., 매개변수n) {
    return;
}
ES6에서는 기존의 함수 선언 방식을 개선한 화살표 함수(arrow function)를 추가.
화살표 함수는 다음과 같이 화살표를 사용해 함수를 선언하는 방식이다.
(형식)
const 함수명 = (매개변수1, 매개변수2, ..., 매개변수n) => {
    return;
} */

console.log(sum(5,4));

function sum(num1, num2){
    return num1+num2;
}

const sum2 = function (num1, num2) {
    return num1+num2;
}
console.log(sum2(5,4));

const sum3 = (num1,num2)=>num1+num2;
console.log(sum3(5,4));

const f = function () {
    return "100";
}
console.log("f()",f());

const f2 = function (a,b) {
    return a*b;
}
console.log("f2(3,5)",f2(3,5));

