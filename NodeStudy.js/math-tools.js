function add(a,b){
  return a + b;
}

const PI = 3.14;
let author = 'codeIt teacher';    

let test = {
  date: '2020-09-20',
  types: ['safetyTest', 'performanceTest'],
  printTypes() {
    for (const i in this.types){
      console.log(this.types[i]); 
    }
  }
}  
// add() 함수를 외부에 사용하기 위해서는 exports.(외부 공개 이름) = add; 이런식으로 선언해야한다.
exports.plus = add; 
exports.PI = PI;
exports.author = author;
exports.test = test; 
exports.divide = function divide(a, b) {return a / b};  

// 공개하고 싶은 것들을 모은 *객체*를 외부에 공개하기!! 
let caculator = {
  PI: 3.14,
  add: (a,b) => a + b,
  substract: (a,b) => a - b,
  multiply: (a,b) => a * b,
  divide: (a,b) => a / b,
  }; 
// 모듈의 내부의 것을 외부에 공개하는 방법
// 1. 공개하고 싶은 것들을 하나씩 exports로 공개 
// 2. 공개하고 싶은 것들을 모아서 하나의 객체로 만들고 
//    module.exports로 객체를 통째로 공개(공개하고 싶은 것들이 많다면 이 방법을 추천!)
// exports 객체와 module 객체의 exports 프로퍼티가 가리키는 객체는 '동일한' 객체입니다. 
module.exports = caculator;      

// Arrow Expression(함수 표현식) 
const calc = (a,b) => {
  return a + b; 
};  

/*
const arr = [1, 2, 3, 4, 5];

function getSquare(x) {
  return x * x;
}

const newArr = arr.map(getSquare);
console.log(newArr);  */ 

// 위의 코드를 아래 코드로 변경하기 
/*const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function(x) { // 이름이 없는 함수를 AnonymousFunction이라고 한다.
  return x * x;
});
console.log(newArr); */

// 위의 AnonymousFunction을 ArrowFunction 형태로 변경하기
const arr = [1,2,3,4,5];

const newArr = arr.map((x) => {
  return x * x;
})
console.log(newArr); // [ 1, 4, 9, 16, 25 ] 





