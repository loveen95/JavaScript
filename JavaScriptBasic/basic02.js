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






