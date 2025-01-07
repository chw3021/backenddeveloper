/* 전개 연산자 (파일명: spreadoperator.js)
…은 전개 연산자(spread operator)라고 한다.
전개 연산자는 반복 가능한 객체를 반환하는 표현식 앞에 표기하며, 
이를 통해 반복가능한 객체를 배열 리터럴 또는 함수의 인수 목록으로 펼칠 수 있다.
*/

const numArray = [2,3,4];
const newNumArray = [1, ...numArray, 5];
const newNumArrays = [1, numArray, 5];

console.log(numArray);
console.log(newNumArray);
console.log(newNumArrays);
