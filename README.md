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
* 자바스크립트는 동적타입 언어이므로 변수에 어떤값이 할당될지 예측하기 어렵다
* typeof: 피연산자의 데이터 타입을 문자열로 반환 ex) typeof ''; // string
   * typeof의 경우 null, 배열, object, 함수의 경우 function을 반환하고 거의 모든 객체는 object를반환한다
   * 그래서 객체의 종류까지 구분하여 체크하려할때 사용하기는 곤란하다
   * 그래서 Object.prototype.toString.call(1); // [Object Number]

* 자바스크립트는 프로토타입 기반 객체지향 프로그래밍 언어
* 프로토타입 기반 객체지향 프로그래밍 언어: 클래스 없이 객체를 생성가능(ES6에서 추가됨)
* 자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어있다. 부모객체를 프로토타입 객체 또는 프로토타입이라고한다
* 객체리터럴: 중괄호({}) 로 감싸진 하나 이상의 속성이름과 속성 값의 리스트
* [[Prototype]]: 
  * 함수를 포함한 모든 객체가 가지고 있는 인터널 슬롯
  * 객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리키며 함수객체의 경우 Function.prototype를 가리킨다
* prototype 프로퍼티
   * 함수객체만 가지고 있는 프로퍼티
   * 함수 객체가 생성자로 사용될때 이 함수를 통해 생성될 객체의 부묘 역할을 하는 객체(프로토타입 객체)를 가리킨다
  
  ```
  function Person(name) {
  this.name = name;
  }

  var foo = new Person('Lee');

  console.dir(Person); // prototype 프로퍼티가 있다.
  console.dir(foo);    // prototype 프로퍼티가 없다.

  console.log(Person.__proto__ === Function.prototype);
  console.log(Person.prototype === foo.__proto__);
  ```

* constructor 프로퍼티: 프로토타입 객체는 constructor 프로퍼티를 갖는다. constructor 프로퍼티는 객체의 입장에서 자신을 생성한 객체를 가리킨다
* 자바스크립트에서 원시타입(숫자, 문자열, boolean, null, undefined)을 제외한 모든것은 객체이다.
* 원시타입은 객체가 아니므로 프로퍼티나 메소드를 직접 추가할 수 없다
* 근데 String.prototype에 메소드를 추가하면 원시타입, 객체 모두 메소드 사용가능

* 프로토타입은 유전자라는뜻, prototype 프로퍼티를 통해 생성자 함수는 인스턴스에서 프로토타입 객체에 있는 데이터, 메소드를 상속한다
* 프로토타입체인: 인스턴스 객체의 key에 접근할 때 해당 객체에게 key가 없으면 그다음 상위 유전자 속성에서 key가 있는지 확인 -> 없으면 그것을 찾기위한 더상위의 프로토타입(부모) 에처 찾는다. 이것을 프로토타입 체인이라고 한다. 

* prototype vs __proto __ 차이: 
   * prototype: 내가 원형일때 존재
   * __proto __: 나의 원형을 가리킴, 모든 객체가 가지고 있다

* scope: 자바스크립트를 포함한 모든 프로그래밍 언어의 기본적인 개념
* 자바스크립트의 스코프는 타언어와 다른 특징이 있다.
* 자바스크립트는 함수레벨 스코프를 따른다
```
//일반적인 스코프
int main(void) {
  // block-level scope

  //x는 if문에서만 사용가능 ->ES6 이상부터 let을 사용하면 블록레벨 스코프 사용가능
  if (1) {
    int x = 5;
    printf("x = %d\n", x);
  }

  printf("x = %d\n", x); // use of undeclared identifier 'x'

  return 0;
}
```

```
//자바스크립트 스코프
var x = 0;
{
  var x = 1;
  console.log(x); // 1
}
console.log(x);   // 1

let y = 0;
{
  let y = 1;
  console.log(y); // 1
}
console.log(y);   // 0
```

* 전역 스코프: 전역에 변수를 선언하면 이 변수는 어디서든지 참조할수 있는 전역 스코프를 갖는 전역변수가 된다.

* 자바스크립트는 타언어와 달리 특별한 시작점이 없기 때문에 전역에서 변수나 함수를 선언하기 쉬운데 특별한 시작점이 없기 때문에 코드가 나타나는 즉시 해석되고 실행된다. -> 전역변수를 남발하는 문제를 야기

* 함수레벨 스코프
```
var a = 10;     // 전역변수

(function () {
  var b = 20;   // 지역변수
})();

console.log(a); // 10
console.log(b); // "b" is not defined
```
* 함수 영역에서 전역변수 참조가능
  
* 자바스크립트의 함수는 호출될 때 매개변수로 전달되는 인자값 이외에 arguments객체와 this를 암묵적으로 전달받는다.
* 자바스크립트에서의 this는 java같은 언어의 개념과 다르다.
* window 객체: 브라우저의 요소들과 자바스크립트 엔진, 모든 변수를 담는 객체이다.
* 자바스크립트의 경우 함수호출방식에 의해 this에 바인딩할 어떤 객체가 동적으로 결정, -> 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는것이 아닌 함수를 호출할 때 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정
* 함수호출하는 방식
    * 함수호출
    * 메소드호출
    * 생성자 함수호출
    * apply/call/bind 호출

* 클로저는 자신이 생성될때의 환경을 기억해야 하므로 메모리차원에서 손해를 볼 수 있다. 하지만 클로저는 자바스크립트의 강력한 기능으로 이를 적극적으로 사용해야한다.
* 클로저가 가장 유용하게 사용될떄: 현재상태를 기억하고 변경된 최신 상태를 유지하는것
* 고차함수: 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수
* Heap: 동적으로 생성된 객체 인스턴스가 할당되는 영역
* 인라인 이벤트 핸들러 방식의 경우, 이벤트 핸들러는 일반함수 호출되므로 이벤트 핸들러 내부의 this는 전역객체 window를 가리킨다
```
<!DOCTYPE html>
<html>
<body>
  <button onclick="foo()">Button</button>
  <script>
    function foo () {
      console.log(this); // window
    }
  </script>
</body>
</html>
```

* HTML5는 중력과의 관계에서 디바이스의 물리적 방향의 변화를 감지가능

## ES6
* let: 
  * 블록레벨 스코프, 일반적인 다른언어랑 같게 블록에서만 사용가능
  * 중복변수 선언x
  * 호이스팅  불가
  * let 전역변수는 보이지않는 개념적인 블록내에 존재 -> window.-- 로 접근불가
* conet:
  * 재할당 금지
  * 선언과 동시에 할당이 이루어져야한다
  * 블록레벨 스코프
  * 객체의 내용은변경가능

ES6 에선 var키워드를 사용x