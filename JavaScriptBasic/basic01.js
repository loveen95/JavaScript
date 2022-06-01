// <JavaScript Basic> //

// 문장끝에 세미콜론 ";"을 작성하는것이 좋다.
// 자료형 (Datatype) : 숫자(정수,소수), 문자(String), 불린(Boolean)
// 추상화 : 구체적인 정보를 꼭 필요한 핵심으로 표현하는 것 
// 프로그래밍에서의 추상화를 통한 코드는 더 좋은 소통을 도와준다. 

// 변수 선언 //
let espressoPrice;
espressoPrice = 3000;
let lattePrice = 4500;

console.log(espressoPrice);
console.log(espressoPrice * 2);

// 자바스크립트 코드 사용시 스타일 가이드
// https://google.github.io/styleguide/jsguide.html

// 문제) 메뉴별 칼로리 테스트
let espresso = 10
let milk = 170 
let chocolateSyrup = 50
let whippedCream = 60 
// 테스트
console.log(espresso); // 에스프레소 칼로리
console.log(espresso + milk); // 라떼 칼로리
console.log(espresso + chocolateSyrup + milk); // 모카 칼로리
console.log(espresso + chocolateSyrup + milk + whippedCream); // 모카(휘핑 추가) 칼로리


// 함수 선언 //
function greetings (setence) {   
    console.log("Hi");
    console.log("안녕");
    console.log("Guten Tag");
    console.log("Bonjour");
    console.log(setence) 
  };  
greetings(); // 함수 호출  

// Parameter(매개변수) //
greetings('Hola')

function welcome(name){
  console.log('안녕하세요 ' + name + "님!");
};
welcome('이윤빈'); 

// 문제) TB를 입력 받고 GB와 MB로 바꾸기  
function teraToGiga(tb) {
  console.log(tb + "TB는\n" + tb * 1024 + "GB 입니다.")
};
function teraToMega(tb){
  console.log(tb + "TB는\n" + tb * 1024 * 1024 + "MB 입니다.") 
};
// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);  

// 다중 파라미터 //
function printSum(name, birth, job){
  console.log("이름 : " + name + "\n생년월일 : " + birth + "\n직업 : " + job)
};
printSum('이윤빈','95.12.14','개발자') 
   

// 문제) 체질량 지수 (BMI구하기)
function bmiCalculator(name, weight, tall){
  console.log(name + "님의 체질량지수는 " + weight / (tall * tall /10000) + "입니다.")
};
// 테스트
bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);


// 문제) 이자 금액 계산하기
function interestCalculator(myMoney,saveTerm,interestRate) {
  return myMoney * saveTerm * interestRate/100
}
// 조건 입력 테스트
let myMoney = 3650000; // 맡긴 금액 (원)
let saveTerm = 1; // 맡기는 기간 (년)
let interestRate = 4; // 이자율 (%)  

// 수령액 계산 테스트
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterest;

// 출력 테스트
console.log('맡긴 금액은 ' + myMoney + '원 입니다.');
console.log('이자는 ' + myInterest + '원 입니다.');
console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.'); 


// 문자열 //
console.log(`"He said "I' Iron man"`) // 출력값 "He said "I' Iron man" 
console.log("한국 영화 역사상 아카데미상을 받은 것은 '기생충'이 처음이다.")
console.log('아리스토텔레스는 "인간은 사회적 동물이다."라고 말했다.')
console.log(`영화 '베테랑'에서 "어이가 없네~"라는 대사가 유명했다.`) // 백틱활용  

// 불대수 //
// AND : 둘다 True여야 True
// OR : 하나라도 참이면 True
// NOT : 참을 거짓으로 거짓을 참으로 (NOT 2는 1보다 작다 == 2는 1보다 작지않다, 즉 True) 

// Boolean 
// ===(같다), !==(같지않다), &&(and연산자), ||(or연산자), !(NOT연산자), !!(반대의반대)

// 문제) True인 경우를 찾으세요.
let x = 4;
let y = false;
let z = 'c'; 

x > 5 && 'codeit' === 'codeit' // False 
y || !y // True
'codeit' !== z + 'odeit' // False
x < 4 || !(y === true) // True 

// typeof 연산자 //
typeof 101 // number
typeof 1.0 // number

// typeof 함수가 사칙연산자보다 더 우선이기 때문에 string이 출력되고 Codeit이 이어서 출력된다.
console.log(typeof 'Hello' + 'Codeit'); //   stringCodeit
// 문자열 number - 3 즉 숫자가 아니다로 인식해서 NaN이 나온다.
console.log(typeof 8 - 3);  // NaN
console.log(typeof (8 - 3)) // number 

console.log (typeof typeof(3 * 3)) // string

// 연산자 우선순위 참조 링크
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


// String, Number, Boolean
// 형변환 ///
console.log(Number('10') + Number('5')); 
// 불린 -> 문자
let s = true;
console.log(y); //true
console.log(String(y)); // true
console.log(typeof y); // boolean
console.log(typeof String(y)); // string  

// 문자 -> 숫자
let v = '123'
console.log(x); // 123
console.log(Number(x)); // 123
console.log(typeof x); // string
console.log(typeof Number(x)); // number 

// 불린 -> 숫자
let d = false; 
console.log(y); // false
console.log(Number(y)); // NaN
console.log(typeof y); // boolean 
console.log(typeof Number(y)); // number 

// 문자 -> 불린         // '', 0, NaN 값은 Boolean()시에 false가 나온다. 
let h = '';
console.log(Boolean(z)); // false
console.log(typeof Boolean(z)); // boolean 

// 숫자 -> 불린       
let k = 23
console.log(Boolean(k)); // false 
console.log(typeof Boolean(k)); // boolean  

// 문제) 형변환 출력 값
console.log(Number('1' + '2' + '3') - Number(true)); // 122 
// - 괄호가 먼저 연산되서 문자 '123' -> Number로 형변환 123 -> true를 Number로 형변환 1 -> 123 - 1 = 122가 출력된다.

// Boolean("false") // true (문자열 false이기 때문에 결과는 true)
// Boolean(6 % 2)  // false (0이 나오기 때문에 false)
// Boolean(NaN || Boolean('0')) // true (NaN은 false '0'은 문자열이기 때문에 true)
// Boolean(typeof false) // true (false의 타입은 string이고, 문자열을 불린으로 형변환 했기 때문에 결과는 true)

console.log(4 + '3'); // 43
console.log(4 - true); // 3 
console.log(4 / '2'); // 2 
console.log(4 % 'two'); // NaN  

console.log(1 === '1'); // false       일치(===), 불일치(!==)는 형변환이 X
console.log(1 === true); // false 
console.log(1 == "1"); // true         동등(==), 부등(!=)은 형변환이 일어난다.
console.log(1 == true); // true          


// 템플릿(일정한 틀 & 형식)문자열 //
let year = 1995;
let month = 12; 
let day = 14;
console.log(`생년월일은 ${year}년 ${month}월 ${day}일입니다.`) 

let myNumber = 3;
function getTwice(x){
  return x * 2;
}
console.log(`${myNumber}의 두배는 ${getTwice(myNumber)}입니다.`)  

// 문제
function calcWage(name, time, wage) {
  let total = time * wage;

  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`); 
}
// 테스트
calcWage('김윤식', 208, 11340); // 김윤식님의 근무 시간은 총 208시간이며, 최종 급여는 2358720원 입니다.
calcWage('성규재', 175, 12160); // 성규재님의 근무 시간은 총 175시간이며, 최종 급여는 2128000원 입니다.   


// null과 undefined (자료형) // 
let codeit; 
console.log(codeit); // undefined       
codeit = null;
console.log(codeit); // null - 의도적으로 값이 없다는걸 표현할려면 null을 사용한다. 


// 함수의 실행 순서 //
function square(x) {
  return x * x;
}

console.log("함수 호출 전");    // 1번
console.log(square(6));      // 2번 - 36
console.log("함수 호출 후");     // 3번 


// return문과 console.log 제대로 이해하기 //
function square(x) {
  return x * x;
  console.log("return후")   //  Dead Code = return문으로 인해 함수가 종료되므로 실행이 안된다.
}
function printSquare(x){
  console.log(x * x);
}
console.log("함수 호출 전");  
console.log(square(6));    // 36
console.log(printSquare(3)); // 9 출력후 undefined가 출력된다.(return값이 없기때문에) 


// 옵셔널 파라미터 //
// * 옵셔널 파라미터는 선언할때 순서를 파라미터 맨끝에다가 선언해야한다 *
function introduce (name, age, nation = "한국") {
  console.log(`제이름은 ${name}이고 나이는 ${age}살이고 국적은 ${nation}입니다.`);

}

introduce("이윤빈",26,"미국"); // 값을 모두 전달한 경우 //제이름은 이윤빈이고 나이는 26살이고 국적은 미국입니다.
console.log(''); 
introduce("이윤빈",26); // 파라미터 값을 생략한 경우 //제이름은 이윤빈이고 나이는 26살이고 국적은 한국입니다.


// 변수의 Scope (범위, 영역) //  
let scope = 3; // 글로벌 변수

function myFunction(){ // 블록문 (Block Statament)
  let scope = 5; // 지역변수, 로컬 변수(Local Variable) 
  console.log(scope);
}

myFunction();    // 5
console.log(scope); // 3


// 상수(constant) // 
const PI = 3.14; // 원주율
let radius = 0; 

function calcArea(){
  return PI * radius * radius;
}
function printArea(){
  return console.log(`반지름이 ${radius}일때, 원의 넓이는 ${calcArea()}입니다.`); 
}
radius = 4;
console.log(printArea());
radius = 7; 
console.log(printArea());  


// if문 (if statement) //
function checkHeight(height) {
	if (height >= 140){
	  console.log('탑승이 가능합니다.');
	} else {
	  console.log('탑승이 불가능합니다.');
	}
}

// 테스트 코드
checkHeight(140);
checkHeight(135);  

/*의 코드보다 좋은 코드 
function checkHeight(height) {
  const LIMIT = 140;
  let passMessage = '탑승이 가능합니다.';
  let failMessage = '탑승이 불가능합니다.';

  if (height >= LIMIT) {
    console.log(passMessage);
  } else {
    console.log(failMessage);
  }
} 
*/ 

// else if문 //
function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;
  if (totalScore >= 90){
    console.log('A'); 
  } else if (totalScore >=80){
    console.log('B');
  } else if (totalScore >= 70){
    console.log('C');
  } else if (totalScore >= 60){
    console.log('D');
  } else {
    console.log('F');
  }
}

// 테스트 코드
printGrade(25, 35); // D
printGrade(50, 45); // A 

// 문제) 
// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  if (myAge > yourAge && myGender === yourGender){
    return callYoungerBrother;
  } else if (myAge > yourAge && myGender !== yourGender){
    return callYoungerSister;
  } else if (myAge < yourAge && myGender === yourGender){
    return callOlderBrother;
  } else if (myAge < yourAge && myGender !== yourGender){
    return callOlderSister;
  } else {
    return callFriend;
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);   

// switch문 (switch statement) // 값을 비교할때에는 자료형을 엄격하게 구분한다. 
/* switch (비교할값){
    case 조건값_1:
      동작부분;
      break;
    case 조건값_1:
      동작부분;
      break; 

// switch문은 값들을 비교할 때 자료형을 엄격하게 구분한다는 것과 if문으로 대체할 때는 반드시 등호 3개로 일치비교를 해야한다.
} */ 
let myChoie = 2;    
switch(myChoie){
  case 1:
    console.log("토끼");
    break;  // break를 작성하지 않으면 다음switch문도 동작된다. 
  case 2:
    console.log("고양이");
    break;
  default:
    console.log("숫자를 선택해 주세요."); 

// 문제)
// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
function checkPrice(grade) {
	switch(grade){
	  case 'R':
	    console.log(`${grade}석은 ${RPrice}만원 입니다.`);
	    break;
	  case 'VIP':
	    console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
	    break;
	  case 'S':
	    console.log(`${grade}석은 ${SPrice}만원 입니다.`);
	    break;
	  case 'A':
	    console.log(`${grade}석은 ${APrice}만원 입니다.`);
	    break;
	  default:
	    console.log("VIP, R, S, A 중에서 하나를 선택해 주세요.");
	    break;
	}
}

// 테스트 코드
checkPrice('R'); // R석은 13만원 입니다.
checkPrice('VIP'); // VIP석은 15만원 입니다.
checkPrice('S'); // S석은 10만원 입니다.
checkPrice('A'); // A석은 8만원 입니다.
checkPrice('B'); // VIP, R, S, A 중에서 하나를 선택해 주세요.  


// 반복문 (loop statement)//
/*for (초기화부분; 조건부분; 추가동작부분){
    동작부분 
}*/  
// 1~100까지 짝수만 출력하기
for (let i = 1; i <= 100; i++){
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 또는 
for (let m = 2; m <= 100; m += 2) {
  console.log(m);
} 

// 문제) 별 만들기
function printTriangle(height) {
  let message = '';
  for (let i = 0; i < height; i++) {
    message += '*';
    console.log(message);
  }
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5); 

/*while (조건부분){                
    동작부분;
} */ 
 let while_ex = 30; 

 while (while_ex % 7 !== 0){ //   while_ex가 7로 안나눠지면 반복문 동작! 나눠지면 반복문 탈출!
   while_ex++;
 }
console.log(while_ex); 

// 문제) 1~100 까지 홀수만 출력하시오.
let repeat = 0;
while (repeat <= 100){
  repeat++;
  if (repeat % 2 !== 0){
    console.log(repeat); 
  }
}

// 문제2) 정수 180의 약수를 모두 출력하고, 총 몇개의 약수가 있는지 출력하는 프로그램을 작성
const N = 180;
let q = 1;
let count = 0;
while (q <= N){
  if (N % q === 0){
    console.log(q);
    count += 1;
  }
  q++; 
}
console.log(`${N}의 약수는 총 ${count}개입니다.`)


// break 와 continue // 
let b_c = 1;
while (b_c <= 10){
  console.log(b_c);
  if(b_c === 7){
    break; 
  }
  b_c++;
}

for (let ct = 1; ct <= 10; ct++){
  if (ct % 2 == 0){
    continue;
  }
  console.log(ct);
}

let k = 1;
while (k <= 10){
  if(k % 2 === 0){
    k++;
    continue;
  }
  console.log(k); 
  k++;
}

// 문제) 1단 ~ 9단 구구단 만들기
for (let i = 1; i <= 9; i++){
  for(let j = 1; j <= 9; j++){
    console.log(`${i} * ${j} = ${i*j}`);
  }
} 

// 문제2) 피보나치 수열
let pre = 0;
let curr = 1;
for (let i = 0; i <=50; i++){
  console.log(curr);
  let temp = pre;
  pre = curr;
  curr = temp + curr;
  }





























  






















  































