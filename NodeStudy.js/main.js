 // 모듈이란? 자바스크립트 파일 하나를 모듈이라고 한다. 모듈이 모인것을 프로그램이라고 함.

 // require() - 모듈을 불러 와주는 함수
 // require() 함수는 'module 객체의 exports 프로퍼티가 가리키는 객체'를 리턴하기 때문에, exports키워드로는 원래의 객체에 접근할 수 없다.
const m = require('./math-tools'); // 모듈의 위치가 다른 곳이라면 ("../폴더이름/math-tools");

//  console.log(m.plus(1, 2)); 
//  console.log(m.author);
//  console.log(m.PI);
//  console.log(m.test.date); 
//  console.log(m.test.types); 

// 모듈의 내부의 것을 외부에 공개하는 방법
// 1. 공개하고 싶은 것들을 하나씩 exports로 공개 
// 2. 공개하고 싶은 것들을 모아서 하나의 객체로 만들고 module.exports로 객체를 통째로 공개(공개하고 싶은 것들이 많다면 이 방법을 추천!)
 console.log(m.add(2,4)); // 6
 console.log(m.divide(10,2)); // 5
 console.log(m.multiply(10,5)); // 3
 console.log(m.substract(14,5)); // 9 



