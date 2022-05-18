
// JavaScript Basic //

// 문장끝에 세미콜론";"을 작성하는것이 좋다.
// 자료형 (Datatype) : 숫자(정수,소수), 문자(String), 불린(Boolean)
// 추상화 : 구체적인 정보를 꼭 필요한 핵심으로 표현하는 것 
// 프로그래밍에서의 추상화를 통한 코드는 더 좋은 소통을 도와준다. 

// 변수 선언
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


// 함수 선언
function greetings (setence) {   
    console.log("Hi");
    console.log("안녕");
    console.log("Guten Tag");
    console.log("Bonjour");
    console.log(setence) 
  };  
greetings(); // 함수 호출  

// Parameter(매개변수)
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

// 다중 파라미터 
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


// 문자열 
console.log(`"He said "I' Iron man"`) // 출력값 "He said "I' Iron man" 
console.log("한국 영화 역사상 아카데미상을 받은 것은 '기생충'이 처음이다.")
console.log('아리스토텔레스는 "인간은 사회적 동물이다."라고 말했다.')
console.log(`영화 '베테랑'에서 "어이가 없네~"라는 대사가 유명했다.`) // 백틱활용  

// 불대수 
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











