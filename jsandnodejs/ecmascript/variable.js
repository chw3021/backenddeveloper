// ECMAScript 6 문법
// 1. 변수를 중복 정의 할 수 있다.
var number = 10;
 
var number = "자바스크립트";
console.log(number);
console.log("----------------");

//2-1. 변수가 사용되고 나서 선언이 되었을 때

console.log(number1); 
// var로 선언한 변수는 끌어 올려진다.(호이스팅)
var number1 = 30;
console.log(number1);
console.log("----------------");

// var로 선언한 변수는 끌어 올려진다.
number2 = 40;
var number2;
console.log(number2);
console.log("----------------");

// 3. for문 초기화식에서 변수 선언
console.log(i); 
for(var i=0; i <3; i++){
    console.log("Test i = " + i);
}
i = 0; //i의 초기화 과정.
console.log("----------------");

var i;
console.log(i); 
for(i=0; i <3; i++){
    console.log("Test i = " + i);
}
console.log("----------------");

// 4. if문 내에서 변수 선언
/*var num = 10;
console.log(num);
if(num !== 10) { 
    var num = 20;
    console.log("num !== 10");
}else{
    console.log("num === 10");
}
console.log("num= "+num);
console.log("----------------");*/

// 변수가 사용되고 난 후 선언이 되었을 때
console.log(num);

if(num !== 10) { 
    // var로 선언한 변수는 끌어 올려진다.
    var num = 20;
    console.log("num !== 10");
}else{
    console.log("num === 10");
}
console.log("num= "+num);
console.log("----------------");

// let 선언과 동시에 초기화
let number3 = 100;
console.log(number3);
// 같은 이름으로 중복 선언이 불가능하다
// 변수 선언의 끌어올림이 발생하지 않는다.
console.log("----------------");

// const 상수 선언. 선언과 동시에 초기화해야 한다.
const number4 = 10;
console.log(number4);