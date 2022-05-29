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










