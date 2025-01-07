/* 비구조화 할당 이전 (파일명: destructuring.js)
객체의 속성 또는 값을 해체하여 그 값을 변수에 각각 할당하여 사용하는 표현식으로 
구조 분해 할당이라고도 한다. */

const color = ['red','green','blue'];
const [r,g,b] = color;

console.log(r);
console.log(g);
console.log(b);

const [c,j, ...language] = ['C','js','py','react','C++']

console.log(c);
console.log(j);
console.log(language.length);
console.log(language[0]);
console.log(language[1]);
console.log(language[2]);

/* [요구사항 3] 구조 분해 할당으로 출력해 주세요. */
const person = {
    myName : "홍길동",
    age : 25,
    location: "서울시 강남구 테헤란로14길"
};

console.log("-------------");
for (info in person){
    console.log(info ,":", person[info]);
}

const numbers1 = [1,2,3,4,5];
const numbers3 = numbers1.map((value, index) =>{
    return value*123;
});
console.log(numbers3);
