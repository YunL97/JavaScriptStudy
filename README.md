# JavaScript 공부

### 참조: https://poiemaweb.com/

<br>

- 모든 브라우저는 자바스크립트를 해석하고 실행할 수 있는 자바스크립트 엔진을 내장하고 있다.
- 자바스크립트는 동적타입(dynamic/weak type) 언어, 변수는 고정된 타입이 없어서 같은변수에 여러타입의 값을 자유롭가 할당 가능
- js는 모든 수를 실수로 처리하며 정수만을 표기하기 위한 특별한 데이터타입이 없음
- 호이스팅: var 선언문이나 function 선언문 등 모든 선언문이 해당 Scope의 선두로 옮겨진 것처럼 동작하는 특성 -> 자바스크립트는 모든 선언문 (var, let, const, function, ,function\*, class)이 선언되기 전에 참조 가능하다.
- 변수 사용 문제점

  - 전역변수 남발
  - var 키워드 생략이 되는데 쓰지않으면 변수가 전역화된다
  - 중복이 허용되어서 의도하지 않은 변수값을 변경할 수 있다
  - 변수를 선언하기 전에 참조가 가능하다

- 대부분의 문제는 전역변수로 인해 발생한다 -> var 단점 보오나을 위해 leet, const 키워드 도입
- x == y x와 y의 값이 같음
- x === y x와 y의 타입이 같음
- 5 == '5' true
- 5 === '5' false
- 0은 암묵적으로 false로 타입 변환된다.
- typeof 1 은 number을 반환한다
- +'0' '+' 붙이면 number로 형변환
- parseInt, parseFloat: 문자열타입만 숫자로 변환가능
- Boolean('x') //true
  - 타입을 불리언타입으로 변환
- !!'x' // true

  - 타입을 불리언타입으로 변환

- 논리합 연산자는 오른쪽에서 왼쪽으로 편가

  - 'Cat' && 'Dog' // 'Dog'
  - 'Cat' || 'Dog' // 'Cat'

- 생성자 함수

```
// 생성자 함수
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
  };
}

// 인스턴스의 생성
var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');
```

- 생성자 함수는 대문자로 시작한다

- for-in문은 객체의 문자열키를 순회하기 위한문법, 배열에는 사용권장 x
  - 객체의 경우 순서 보장 x
  - 배열요소들만 순회 x
- for-of문: 배열의 요소를 순회하기 위해 사용

- 문자열은 변경할 수 없는 immutable value 이다
- 의도하지 않은 객체의 변경이 발생하는 원인의 대다수는 레퍼런스를 참조한 다른 객체에서 객체를 변경하기 때문 -> 객체를 불변객체로 만들어서 프로퍼티의 변경을 방지 or 객체의 변경이 필요한 경우 참조가 아닌 객체의 방어적복사(defensive copy) 를 통해 새로운 객체를 생성한 후 변경

- Object.assign: 타깃 객체로서 소스 객체의 프로퍼티를 복사, 이떄 소스 객체의 프로퍼티와 동일한 프로퍼티를 가진 타깃객체의 프로퍼티들은 소스 객체의 프로퍼티로 덮어쓰기된다 뭔뜻 ?

```
// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);

console.log(merge1); // { a: 1, b: 2, c: 3 }
console.log(o1);     // { a: 1, b: 2, c: 3 }, 타겟 객체가 변경된다!

// Merge
const o4 = { a: 1 };
const o5 = { b: 2 };
const o6 = { c: 3 };

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2); // { a: 1, b: 2, c: 3 }
console.log(o4);     // { a: 1 }
```

- object.freeze: 불변 객체로 만들 수 있음 -> 내부객체(address)는 변경가능

```
const user1 = {
 name: 'Lee',
 address: {
   city: 'Seoul'
 }
};

Object.freeze(user1);

user1.name = 'Kim'; // 무시된다!
```

- 내부객체까지 변경 불가능하게 하는법:

```
function deepFreeze(obj) {
  const props = Object.getOwnPropertyNames(obj);

  props.forEach((name) => {
    const prop = obj[name];
    if(typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}

const user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

deepFreeze(user);
```

- 객체: 자바스크립트의 기본타입은 객체, 객체란 이름, 값으로 구성된 프로퍼티의 정렬되지 않은 집합
- 프로퍼티란: 객체안에 선언된 이름과 값으로 이루어진 한쌍
- 객체의 프로퍼티참조법:

  - 객체이름.프로퍼티이름
  - 객체이름["프로퍼티이름"]

-
