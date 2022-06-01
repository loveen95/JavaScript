// 객체와 프로퍼티 // 
// 객체(Object)의 속성을 property라고한다.
// key 와 value의 쌍값을 이룬다.
let brand = { 
    // key: value   
  brandName: "이마트",
  bornYear: 2002, 
  'place': "강남구",
  park: {
    b1: '지하 1층',
    b2: '지하 2층'
  }
} 


// 객체에서 데이터 접근하기 // 
// 점 표기법(objectName.propertyName)
console.log(brand.brandName); 

// 대괄호 표기법(objectName['propertyName']) 
console.log(brand["place"]) 

//객체안에 객체에 접근하기 
console.log(brand.park.b1) // 지하1층 


// 객체 다루기 // 
brand.brandName = "할리스";
console.log(brand.brandName); 
// 프로퍼티 삭제하기
delete brand['place'];
console.log(brand);

// properName in object
console.log(['brandName'] in brand);  // true출력 

// 문제) 
let myVoca = {
	function: '함수',
	variable: '변수',
	constant: '상수',
	local: '지역의',
	global: '전반적인',
};

// 1. 이미 외운 단어 3개를 삭제해 주세요.
// 여기에 코드를 작성해 주세요.
delete myVoca.function; 
delete myVoca.constant;
delete myVoca.local;


console.log(myVoca);
console.log(myVoca.constant);


// 2. 오늘 외울 단어 4개를 추가해 주세요.
// 여기에 코드를 작성해 주세요.

myVoca["extend"] = "확장하다";
myVoca["export"] = "내보내다"
myVoca["import"] = "불러오다"
myVoca["default value"] = "기본값"
console.log(myVoca);
console.log(myVoca.export);


// 3. default value의 뜻을 출력해 주세요.
// 여기에 코드를 작성해 주세요.
console.log(myVoca["default value"]); 


// 객체와 메소드(Method)// - 메서드는 객체의 고유한 동작으로서 함수의 의미를 부여할수 있다. 
let rectAngle = {
  width: 30,
  height: 50,
  getArea: function(){
    return rectAngle.width * rectAngle.height;
  }
}
let triAngle = {
  width: 15,
  height: 40,
  getArea: function(){
    return triAngle.width * triAngle.height / 2;
  }
}
// 테스트
console.log(triAngle.getArea()); // 300 
console.log(rectAngle.getArea()); // 1500  

// 문제)
let myVoca = {
  addVoca: function(english, mean) {
    myVoca[english] = mean; 
  },
  deleteVoca: function(english){
    delete myVoca[english];
  },
  printVoca: function(english){
    console.log(`"${english}"의 뜻은 "${myVoca[english]}"입니다.`);
  }
};  

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');  


// for..in // 
let code = {
  name: "코드잇",
  bornYear: 2017,
  bestCourse: "자바스크립트 프로그래밍 기초"
}
for (let key in code){   // in을 사용하면 객체의 key값이 출력된다.
  console.log(key);
  console.log(code[key]);      
}            

/* let myObject = {
  300: '정수',      // 프로퍼티 네임에 이렇게 숫자형을 작성해서 사용할수도 있다. ]  
  1.2: '소수'
}; 

// but 실제로 사용이 될때에는 문자열로 형 변환이 되어 사용된다. 
for (let key in myObject) {
  console.log(`${key}의 자료형은 ${typeof key}입니다.`); 
  // 출력값 
  300의 자료형은 string입니다.
  1.2의 자료형은 string입니다.

  console.log(myObject['300']); // 정수
  console.log(myObject.300);    // error - 반드시 대괄호 표기법으로만 접근이 가능


let myObject = {
  '3': '정수3',
  name: 'codeit',
  1: '정수1',
  birthDay: '2017.5.17',
  2: '정수2',
};

for (let key in myObject) {
  console.log(key);
  // 출력값 1 2 3 name birthday 
     -정수형 프로퍼티 네임은 오름차순으로 먼저 정렬하고 나머지 프로퍼티들은 추가한 순서대로 정렬한다.
}
*/ 

// 문제) 60점이 넘으면 합격, 못넘으면 불합격을 출력해주는 함수를 작성하세요.
let hyesoonScore = {
	'데이터 모델링의 이해': 10,
	'데이터 모델과 성능': 8,
	'SQL 기본': 22,
	'SQL 활용': 18,
	'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
	'데이터 모델링의 이해': 14,
	'데이터 모델과 성능': 8,
	'SQL 기본': 12,
	'SQL 활용': 4,
	'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject) {
  let sum = 0;
  for (let key in scoreObject){
    sum += scoreObject[key];
  }
  if (sum >= 60){
    console.log("축하합니다! 합격입니다!");
  } else {
    console.log("아쉽지만 불합격입니다..");
  }  
}

passChecker(hyesoonScore);
passChecker(minsoonScore);  


// 내장 객체(standard built-in objects) // 
// Date  
// new Date(milliseconds)
let myDate = new Date(); // 1970년 1월1일 00:00:00 UTC
let myDate1 = new Date('1995-12-14');
let myDate2 = new Date(2022, 4, 18, 19, 11, 16); // 여기서 month는 0월부터 시작한다! 즉 4월이 아니라 5월인 May가 출력된다.
let today = new Date();

let timeDiff = myDate2.getTime() - today.getTime();

console.log(timeDiff / 1000 / 60 / 60 + "시간"); // -257.37423277777776시간
console.log(myDate2.getFullYear());
console.log(myDate2.getMonth()); // 월
console.log(myDate2.getDate()); // 18일 
console.log(myDate2.getDay()); // 수요일 
console.log(myDate2.setDate(19)); 
console.log(myDate2.setMonth(5)); 
// toLocaleDateString(), toLocaleTimeString(), toLocaleString()
console.log(myDate.toLocaleString()); // 날짜와 시간에 대한 정보  
// Date.now() 
console.log(Date.now() === myDate2.getTime()); // true 

let myDate = new Date(2017, 4, 18);

console.log(typeof myDate); // object
console.log(String(myDate)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
console.log(Number(myDate)); // 1495033200000
console.log(Boolean(myDate)); // true 

// 문제) 입사한지 며칠째인지를 확인하는 함수를 만드세요.
let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
	let diff = today.getTime() - startDate.getTime(); 
	let dayDiff = diff / 1000 / 60 / 60 / 24;
	console.log(`오늘은 입사한 지 ${dayDiff + 1}일째 되는 날 입니다.`);
	
}
workDayCalc(jaeSangStart);  // 오늘은 입사한 지 1151일째 되는 날 입니다.

// Date 참조 사이트 - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date


// 배열 (Array) //  
let courseRanking = [
  '자바스크립트 프로그래밍 기초',
  'Git으로 배우는 버전 관리',
  '컴퓨터 개론',
  '파이썬 프로그래밍 기초'
];
// indexing (0~...) 
console.log(courseRanking[2]); // 컴퓨터 개론

// 배열 다루기 // 
console.log(courseRanking.length); 
courseRanking[4] = "Nice";  // 이렇게 접근하면 요소 추가가 된다.
console.log(courseRanking); 

// 문제) 배열을 이용하여 섭씨를 화씨로 바꾸기
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

for (let i = 0; i < celsiusTemps.length; i++){
  fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5 ) + 32;
}  

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);


// 배열 메소드 //
// splice(삭제할 배열, 삭제할 배열 수, 추가할 item) 배열 삭제하기   
courseRanking.splice(1,0,"빅데이터"); // 1번 배열에 "빅데이터"를 추가한다.
console.log(courseRanking);  
courseRanking.splice(1,1,"빅데이터"); // 1번 배열의 요소를 삭제하고 그자리에 "빅데이터"를 추가한다.
console.log(courseRanking);  

// 문제)
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요.
fruits.splice(1,1,"사과","청포도");

// fruits 배열의 첫 번째 요소를 삭제해 주세요.

fruits.splice(0,1);

// ages 배열에 마지막 요소를 삭제해 주세요.

ages.splice(-1,1);

// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요.

ages.splice(2,1,26);
ages.splice(3,1,28);

// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요.

numbers.splice(0,0,1,2,3,5,8,9); 


// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.
for (let i = 0; i < numbers.length;i++){
  if (numbers[i] % 2 !== 0) { // 홀수이면
    numbers.splice(i, 1);
    i--;   
  }
}
// 테스트 코드
console.log(fruits[1]);  // 청포도
console.log(fruits[0]);  // 사과
console.log(ages[ages.length - 1]); // 30
console.log(ages[3]); // 28
console.log(numbers[3]); // undefined
console.log(numbers); // [2, 8] 

// 배열의 첫 요소를 삭제 : shift()
// 배열의 마지막 요소를 삭제 : pop()
// 배열의 첫 요소로 값 추가 : unshift(value) 
// 배열의 마지막 요소로 값 추가 : push(value) 
// 배열에서 특정 값 찾기 : indexOf(item) 
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.indexOf('Kakao')); // 해당 값이 있는 인덱스가 리턴된다. 정답 : 1
console.log(brands.lastIndexOf('Kakao')); // 해당 값을 반대로 탐색해서 인덱스가 리턴된다. 정답 : 3
// 배열에서 특정 값이 있는 지 확인하기(includes) 
console.log(brands.includes("Kakao")); // true 
console.log(brands.includes("Daum")); // fslse 
// 배열 뒤집기 (reverse) 
console.log(brands.reverse()); // ["Kakao", "Naver", "Kakao", "Google"] 
// 배열 참조 사이트 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array


// for..of 반복문
for (let element of brand) {  // for of는 배열의 요소가 들어간다. 배열의 인덱스를 활용하고 싶다면 in보다는 of가 더 적합하다.
  console.log(element);   
}  

// 문제) 투표 집계하기
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];

// 후보별 득표수 객체
let voteCounter = {};
let count1 = 0;
let count2 = 0;
// votes 배열을 이용해서 voteCounter 객체를 정리하기
for (let name of votes) {
  // 코드를 작성하세요.
  if (name in voteCounter) { // in은 key 값을 설정해주고 propertyName이 있는 경우
    voteCounter[name]+= 1; // 요소에다가 += 1을 해준다.  
  } else {
    voteCounter[name] = 1; // propertyName이 없는 경우 1을 만들어준다.
  }
}
// 후보별 득표수 출력
console.log(voteCounter); // { '이재식': 17, '이규하': 23 }
 

// 다차원 배열 (multidimensions array // 
let twoDimensions = [[1, 2],[2,4]];
console.log(twoDimensions[0][0]);

// 문제) 
let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원'],
];

let teams = [
	[],
	[],
];

// 여기에 코드를 작성해 주세요.
for (let i = 0; i < groups.length; i++){ 
    teams[0][i] = groups[i][0];
    teams[1][i] = groups[i][1];                   
  }

// 테스트 코드
console.log(teams[0]); // [ '영준', '태순', '재훈', '윤형', '규식' ]
console.log(teams[1]); // [ '캡틴', '우재', '지웅', '동욱', '소원' ]


// 자료형 심화 // 
// 숫자 표기법
let myNumber = 1e9; // 100000000 
// 16진법 
let hex1 = 0xff; // 255 
// 8진법
let octal = 0o377; // 255
// 2진법 
let binary = 0b11111111; // 255 

// 숫자형 메소드
// toFixed(0 ~ 100) 
let myNumber = 0.35776; 
console.log(myNumber.toFixed(2)); // 0.36 // string 형이여서 숫자로 사용할라면 형변환을 해줘야한다. 
// toString(2 ~ 36) 
let myNumber2 = 255; 
console.log(myNumber2.toString(2)); // 2진법 타입은 string이다.

// Math 객체
// 절댓값 - 어떤 값의 양수 버전(positive number) 
console.log(Math.abs(-10)); // 5 - Math.abs()는 절댓값을 리턴해준다.
console.log(Math.max(2, -1, 4, 5, 0)); // 10 - Math.max(),Math.min()는 최댓값,최솟값을 리턴 
console.log(Math.pow(2,3)); // 8 - Math.pow(x,y)는 제곱값을 리턴
console.log(Math.sqrt(25)); // 5 - Math.pow(x)는 제곱근을 리턴 
console.log(Math.round(2.6)); // 3 - Math.round(x,y)는 반올림값을 리턴 
console.log(Math.floor(2.4)); // 2 - 버림값을 리턴
console.log(Math.floor(2.4)); // 3 - 올림값을 리턴
console.log(Math.random());  // 0~1 미만의 값이 랜덤으로 리턴
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math    

// 문제) 이자를 계산해주는 함수 작성 
function interestCalculator(r,v,n){
  let interest = v * n * (n+1) / 2 * r / 12;
  console.log(Math.round(interest));
};

// 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
interestCalculator(0.043, 800000, 24);

// 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
interestCalculator(0.043, 600000, 24);


// 문자열 심화// 
/* 
let myString = "Hi Yunbeen";
// 문자열 길이 
console.log(myString.length);
// 요소 접근 
console.log(myString[3]); // 대괄호 표기법
console.log(myString.charAt(3)); //charAt 메소드
// 요소 탐색
console.log(myString.indexOf('a'));
console.log(myString.lastIndexOf('i')); 
// 대소문자 변환
console.log(myString.toUpperCase()); // 대문자로 변환
console.log(myString.toLowerCase()); // 소문자로 변환 
// 양끝 공백 제거
console.log(myString.trim); 
// 부분 문자열 접근 slice(start, end)
console.log(myString.slice(3)); // Yunbeen
console.log(myString.slice(0,2)); // Hi
*/

// 문자열도 '문자'+'열'이기 때문에 배열과 비슷한 부분들이 많다. 
// 모두 length 프로퍼티를 가지고 있고, 대괄호 표기법으로 요소에 접근이 가능하다. 
// 하지만 typeof메소드를 사용하면 문자열은 string이고, 배열은 object이다. 
// string과 array 를 비교 했을때 일치 비교 뿐만아니라, 동등 비교에서도 false가 나온다. 
// 가장 중요한 차이점은 array는 mutable(바뀔수 있는)자료형인 반면에, 
// 문자열은 Immutable(바뀔수 없는)자료형이다.
// 그러므로 문자열에는 splice같은 메서드들을 사용할수 없다. 

// 문제)
let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

let hyungdon = null;

let startIndex = lyrics.indexOf('[형돈]');
let endIndex = lyrics.indexOf('[길]');

hyungdon = lyrics.slice(startIndex, endIndex);


// 테스트 코드
console.log(hyungdon);





 











