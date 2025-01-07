let dic ={
    boy:"소년",
    girl:"소녀",
    friend:"친구"
};

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

dic.apple = "사과";
dic.ten = 10;

console.log(dic.apple);
console.log(dic.ten);


delete dic.girl;  
console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);
console.log("----------------");

function createBook(title, author, publisher, pubdate){
    return{
        title:title,
        author:author,
        publisher:publisher,
        pubdate:pubdate
    };
}

const bookData = createBook("a","a","a","20200202");


const musician = {
    play: function(instrument) {
        return `${instrument}을(를) 연주한다.`;
    }
}

console.log(musician.play("기타"));
console.log(musician.play("피아노"));
console.log("----------------");

function createMember(name, age){
    return{
        name:name,
        age:age
    };
}

let hong = createMember("홍길동",20);



const memberData = {
    printData: function(member) {
        return `${member.name} 의 나이는 ${member.age}입니다.`;
    }
}

console.log(memberData.printData(hong));


const memberData1 = {
    printData() {
        return `${this.name} 의 나이는 ${this.age}입니다.`;
    }
}
const printData = memberData1.printData.bind(hong);
console.log(printData());



console.log(dic['boy']);
console.log(dic['girl']);
console.log(dic['friend']);
console.log("----------------");

let word = dic.friend;
console.log(dic[word]);
console.log("----------------");

let idx = 0;
let code = {
     ['index' + idx++] : idx,
     ['index' + idx++] : idx,
     ['index' + idx++] : idx,
};
console.log(code.index0);            
console.log(code.index1);
console.log(code.index2);
console.log("----------------");

for(let info in hong){
    console.log(`${info} : ${hong[info]}`);
    
}

/* 설정자, 접근자 */
class Movie {
    constructor(name, genre) {
         this._name = name;
         this._genre = genre;
    }
    // getter 함수
    get name() {
         return this._name;
    }
    // setter 함수
    set name(name) {
         this._name = name;
    }
    get genre() {
         return this._genre;
    }
    // setter 함수
    set genre(genre) {
         this._genre = genre;
    }
    display() {
         console.log(this._name);
         console.log(this._genre);
    }
}

let m1 = new Movie("친구", "액션");
m1.display();