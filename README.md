# JavaScript 공부

### 참조: https://poiemaweb.com/

<br>

* 모든 브라우저는 자바스크립트를 해석하고 실행할 수 있는 자바스크립트 엔진을 내장하고 있다.
* 자바스크립트는 동적타입(dynamic/weak type) 언어, 변수는 고정된 타입이 없어서 같은변수에 여러타입의 값을 자유롭가 할당 가능
* js는 모든 수를 실수로 처리하며 정수만을 표기하기 위한 특별한 데이터타입이 없음
* 호이스팅: var 선언문이나 function 선언문 등 모든 선언문이 해당 Scope의 선두로 옮겨진 것처럼 동작하는 특성 -> 자바스크립트는 모든 선언문 (var, let, const, function, ,function*, class)이 선언되기 전에 참조 가능하다.
* 변수 사용 문제점
    * 전역변수 남발
    *  var 키워드 생략이 되는데 쓰지않으면 변수가 전역화된다
    *  중복이 허용되어서 의도하지 않은 변수값을 변경할 수 있다
    *  변수를 선언하기 전에 참조가 가능하다

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



* 객체: 자바스크립트의 기본타입은 객체, 객체란 이름, 값으로 구성된 프로퍼티의 정렬되지 않은 집합
* 프로퍼티란: 객체안에 선언된 이름과 값으로 이루어진 한쌍
* 객체의 프로퍼티참조법: 
   * 객체이름.프로퍼티이름 
   * 객체이름["프로퍼티이름"]

* 생성자 함수
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
  
* 함수도 복사하면 참조값 복사
* 호이스팅: 모든 선언문이 해당 scope? 의 선두로 옮겨진 것처럼 동작하는 특성
   * 자바스크립트는 ES6의 let, const를 포함해서 모든선언(var, let, const, function, function*, class)을 호이스팅 한다
   * 자바스크립트는 모든선언문이 선언되기전에 참고가 가능하다
* 함수 호이스팅: 함수 선언의 위치와는 상관없이 코드내 어느곳에서든지 호출가능  한것 -> 함수 선언문으로 정의된 함수는 자바스크립트 엔진이 스크립트가 로딩되는 시점에 바로 초기화 하고 이를 VO(variable object)에저장한다. 즉,  함수선언, 초기화 ,할당이 한번에 이루어진다
  
* 일급객체: 생성, 대입, 연산, 인자 or 반환값으로서의 전달등 프로그래밍 언어의 기본적 조작을 제한없이 사용할 수 있는 대상을 의미
* 조건
  * 무명의 리터럴로 표현이 가능하다.
  * 변수나 자료 구조(객체, 배열 등)에 저장할 수 있다.
  * 함수의 매개변수에 전달할 수 있다.
  * 반환값으로 사용할 수 있다.
* -> 위사항에 다 부합하기 떄문에 자바스크립트의 함수는 일급객체
* 함수는 객체 -> 함수도 프로퍼티를 가질 수 있음
```
function square(number) {
  return number * number;
}

square.x = 10;
```

* arguments: arguments 객체는 함수 호출시 전달된 인수들의 정보를 담고있는 유사배열객체, 함수 내부에서 지역변수처럼 사용된다. 
   * 매개변수의 갯수보다 인수를 적게 전달했을 때(multiply(), multiply(1)) 인수가 전달되지 않은 매개변수는 undefined으로 초기화된다.

    *  매개변수의 갯수보다 인수를 더 많이 전달한 경우, 초과된 인수는 무시된다.

    *  이러한 자바스크립트의 특성때문에 런타임 시에 호출된 함수의 인자 갯수를 확인하고 이에 따라 동작을 달리 정의할 필요가 있을 수 있다. 이때 유용하게 사용되는 것이 arguments 객체이다.

* arguments 객체는 매개변수 갯수가 확정되지 않은 가변 인자 함수를 구현할 때 유용하게 사용된다.

* 매개변수의 갯수보다 인수를 더 많이 전달한 경우 초과된 인수는 무시된다.
 ```
 function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

multiply(1, 2, 3); // { '0': 1, '1': 2, '2': 3 }
 ```

* 자바스크립트는 함수를 호출할 때 인수들과 함께 암묵적으로 arguments객체가 함수 내부로 전달된다. arguments 객체는 배열의 형태로 인자값 정보를 담고 있지만 실제 배열이 아닌 유사배열객체이다
* 유사배열객체: length 프로퍼티를 가진 객체, 배열X 

```
function sum() {
  var res = 0;

  for (var i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum(1, 2, 3)); // 6
```

* 함수 매개변수 갯수
```
function ac(a,b,c,d){
  console.log(ac.length) //4
}
```

* 모든객체는 [[prototype]] 이라는 내부슬롯이 있다. [[prototype]]내부 슬롯은 프로토타입 객체를 가리킨다. 
* 프로토타입 객체란 프로토타입 기반 객체지향 프로그래밍의 근간을 이루는 객체, 객체간의 상속을 구현하기 위해 사용. 즉 프로토타입 객체는 다른 객체에 공유 프로퍼티를 제공하는 객체를 말함
* __ptoto __: [[Prototype]] 내부슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티, 내부슬롯에는 직접접근할 수 없고 간접겆인 접근방법을 제공하는 경우에 한해서 접근가능, [[Prototype]] 내부슬롯에도 직접접근x, __proto __ 접근자 프로퍼티를 통해 간접적으로 프로토타입 객체에 접근 가능

* 내부함수: 자식함수는 부모변수에 접근가능하지만, 부모함수는 자식함수의 변수에 접근 x
* 
