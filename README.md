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

* ES6 에선 var키워드를 사용x
* 템플릿 리터럴: 백틱 = "" 혼용해서 사용가능
* 백틱사용하면 줄바꿈 백슬래시를 사용하지 않고 엔터키 누르면 줄바꿈 됨
```
const a = `asdasd
asdasd`;

값을 넣고 싶으면 `asd ${} asd`
```

* 화살표함수
```
// ES5
var arr = [1, 2, 3];
var pow = arr.map(function (x) { // x는 요소값
  return x * x;
});

console.log(pow); // [ 1, 4, 9 ]


// ES6
const arr = [1, 2, 3];
const pow = arr.map(x => x * x);

console.log(pow); // [ 1, 4, 9 ]
```

* 화살표 함수는 생성자 함수로 사용불가
* Rest파라미터: 함수에 들어오는 값을 배열로 묶어준다
```
function foo(...rest) {
  console.log(Array.isArray(rest)); // true
  console.log(rest); // [ 1, 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);
```
* spread 문법: ... 은 대상을 개별요소로 분리한다
  * 근데 주의점!: 오브젝트배열을 복사하면 주소값 복사기 때문에 바꾸면 다바뀐다.
```
// ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
console.log(...[1, 2, 3]) // 1, 2, 3

// 문자열은 이터러블이다.
console.log(...'Hello');  // H e l l o

// Map과 Set은 이터러블이다.
console.log(...new Map([['a', '1'], ['b', '2']]));  // [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3]));  // 1 2 3

// 이터러블이 아닌 일반 객체는 Spread 문법의 대상이 될 수 없다.
console.log(...{ a: 1, b: 2 });
// TypeError: Found non-callable @@iterator  
```
* 배열 합치는법
```
// ES6
const arr = [1, 2, 3];
// ...arr은 [1, 2, 3]을 개별 요소로 분리한다
console.log([...arr, 4, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]

or

// ES6
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// ...arr2는 [4, 5, 6]을 개별 요소로 분리한다
arr1.push(...arr2); // == arr1.push(4, 5, 6);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
```

* 기존 배열에 다른 배열의 개별 요소 삽입하는법
```
// ES6
const arr1 = [1, 2, 3, 6];
const arr2 = [4, 5];

// ...arr2는 [4, 5]을 개별 요소로 분리한다
arr1.splice(3, 0, ...arr2); // == arr1.splice(3, 0, 4, 5);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
```

* 배열에 값 더넣는법
```
const arr = [1,2,3];
arr.push(4);
```

* ES6 class
```
// 클래스 선언문
class Person {
  // constructor(생성자)
  #p = 0; // private field
  constructor(name) {
    this._name = name;
  }

  sayHi() {
    console.log(`Hi! ${this._name}`);
  }
}

// 인스턴스 생성
const me = new Person('Lee');
me.sayHi(); // Hi! Lee

console.log(me instanceof Person); // true
```
* 클래스는 선언문 이전에 참조 불가
* 모듈: 어플리케이션을 구성하는 개별적 요소로서 재사용 가능한 코드조각, 모듈은 세부 사항을 캡슐화하고 공개가 필요한 api만을 외부에 노출한다.
* 모듈은 파일단위로 분리되어있음
* export키워드: 모듈안에 선언한 식별자를 외부에 공개하여 다른 모듈들이 참조할수 있게 만드는것
```
export const pi = Math.PI;

// 변수, 함수 클래스를 하나의 객체로 구성하여 공개
export { pi, square, Person }; //한번에 모아서 export 가능
```
* import: 모듈에서 공개(export) 한 대상을 로드 하려면 import 키워드를 사용
* promise: 전통적인 콜백 패턴이 가진 단점을 보완하며 비동기 처리 시점을 명확하게 표현 가능한 장점이 있다
  * 비동기 처리를 하다보면 처리순서를 보장하기 위해 여러개의 콜백 함수가 중첩되어 복잡도가 높아지는 콜백 헬이 발생하는 단점이 있다
  * 콜백 헬은 가독성을 나쁘게 하며 실수를 유발하는 원인이 됨
```
// Promise 객체의 생성
const promise = new Promise((resolve, reject) => {
  // 비동기 작업을 수행한다.

  if (/* 비동기 작업 수행 성공 */) {
    resolve('result');
  }
  else { /* 비동기 작업 수행 실패 */
    reject('failure reason');
  }
});
```
* promise는 비동기 처리가성공했는지 실패 했ㄴ느지 등의 상태 정보를 갖는다
  * pending:	비동기 처리가 아직 수행되지 않은 상태	resolve 또는 reject 함수가 아직 호출되지 않은 상태
  * fulfilled:	비동기 처리가 수행된 상태 (성공)	resolve 함수가 호출된 상태
  * rejected:	비동기 처리가 수행된 상태 (실패)	reject 함수가 호출된 상태
  * settled:	비동기 처리가 수행된 상태 (성공 또는 실패)	resolve 또는 reject 함수가 호출된 상태

* 원시타입: boolean, null, undefined, number, string 
* 객체타입: object
* symbol: ES6에서 새롭게 추가된 7번째 타입, 변경불가능한 원시타입, 심볼은 주로 이름의 충돌 위험이 없는 유일한 객체 프로퍼티키를 만들기 위해 사용
* 이터러블: 프로토콜을 준수한 객체
* 배열은 Symbol.iterator 메소드를 소유 -> 배열은 이터러블 프로토콜을 준수한 이터러블
* 이터러블 프로토콜을 준수한 배열은 for ...of 문에서 순회 가능
```
for (const item of array) {
  console.log(item);
}
```
* 일반 객체는 이터레이션 프로토콜을 준수(symbol.iterator 메소드를 소유) 하지 않기 떄문에 이터러블 x -> 일반 객체는 for...of문에서
  순회할 수 없으며 spread 문법의 대상으로 사용x but 일반 객체도 이터러블 프로토콜을 준수하도록 구현하면 이터러블이 된다.
* 이터레이터: 이터레이터 프로토콜은 next 메소드를소유, next 메소드를 호출하면 이터러블을 순회하며 value, done 프로퍼티를 갖는 이터레이트 리절트 객체를 반환하는것 -> 이터레이터 프로토콜을 준수한 이터레이터는 next 메소드를 갖는다
```
// 배열은 이터러블 프로토콜을 준수한 이터러블이다.
const array = [1, 2, 3];

// Symbol.iterator 메소드는 이터레이터를 반환한다.
const iterator = array[Symbol.iterator]();

// 이터레이터 프로토콜을 준수한 이터레이터는 next 메소드를 갖는다.
console.log('next' in iterator); // true
```
* 제너레이터: 제너레이터함수는 이터러블을 생성하는 함수. 제너레이터함수를 사용하면 이터레이션 프로토콜을 준수해 이터러블을 생성하는 방식보다 간편하게 이터러블을 구현가능, 또한 비동기 처리에 유용
* 제너레이터 함수는 함수코드블록의 실행을 일시 중지했다가 필요한 시점에 재시작가능한 특수한 함수
```
function* counter() {
  console.log('첫번째 호출');
  yield 1;                  // 첫번째 호출 시에 이 지점까지 실행된다.
  console.log('두번째 호출');
  yield 2;                  // 두번째 호출 시에 이 지점까지 실행된다.
  console.log('세번째 호출');  // 세번째 호출 시에 이 지점까지 실행된다.
}

const generatorObj = counter();

console.log(generatorObj.next()); // 첫번째 호출 {value: 1, done: false}
console.log(generatorObj.next()); // 두번째 호출 {value: 2, done: false}
console.log(generatorObj.next()); // 세번째 호출 {value: undefined, done: true}
```
* 디스트럭처링: 구조화된 배열 또는 객체를 디스트럭처링(비구조화, 파괴)하여 개별적인 변수에 할당하는것
```
// ES6 Destructuring
const arr = [1, 2, 3];

// 배열의 인덱스를 기준으로 배열로부터 요소를 추출하여 변수에 할당
// 변수 one, two, three가 선언되고 arr(initializer(초기화자))가 Destructuring(비구조화, 파괴)되어 할당된다.
const [one, two, three] = arr;
// 디스트럭처링을 사용할 때는 반드시 initializer(초기화자)를 할당해야 한다.
// const [one, two, three]; // SyntaxError: Missing initializer in destructuring declaration

console.log(one, two, three); // 1 2 3

// ES6 Destructuring
const obj = { firstName: 'Ungmo', lastName: 'Lee' };

// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
// 변수 lastName, firstName가 선언되고 obj(initializer(초기화자))가 Destructuring(비구조화, 파괴)되어 할당된다.
const { lastName, firstName } = obj;

console.log(firstName, lastName); // Ungmo Lee
```
* barbel: 최신 사양의 자바스크립트 코드를 ie 나 구형 브라우저에서도 동작하는 ES5 이하의 코드로 변환(트랜스파일링)할 수 있다.
* Webpack: 의존관계에 있는 모듈들을 하나의 자바스크립트 파일로 번들링하는 모듈 번들러
* 다수의 자바스크립트 파일을 하나의 파일로 번들링 하므로 html 파일에서 script 태그로 다수의 자바스크립트 파일을 로드해야 하는 번거로움도 사라진다
  
* Promise.race: 함수1, 함수2 중먼저 돌아오는 함수 값만 리턴하는것
```
function a() {
  return Promise.race([함수1, 함수2]);
}

a().then(console.log); 
```

* Promise.all: 함수1, 함수2 가 끝나면 리턴되는것, 여기서 join은 두 함수 리턴값을 합쳐 주는것
```
function a() {
  return Promise.all([함수1, 함수2]).then(fruits => fruits.join(' + ') );
}

a().then(console.log); 
```

* 화살표 함수
  * 장점: this 키워드로 인해 생겼던 많은 문제들을 해결해준다.
  * 화살표 함수안에 ㅅhis를 사용하면 항상 정의한 객체를 나타내고 실행중에 갑자기 바뀌지 않는다.
  * 
```
function a() {

}

==
const a = () => {

}

const a = (number) => number * 2; //로 더축약 가능
```
* call: 함수는 별도 처리를 하지않으면 this를 사용하면 windeow를 가리킴, call함수를 하용하면 this 로 특정 객체를 지정가능, 인자를 넘겨주고 싶을때는 첫번째에 this로 지정할 객체를 넣어줬으면 두번째 인자부터는 함수에 넘겨줄 매개변수를 지정가능
* apply: 배열형태의 매개변수를 받음, 배열을 매개변수로 넘길때는 스프레드연산자를사용해야하는데 apply함수를 사용하면 배열 그대로 보낼 수 있음
* bind: this로 특정 객체를 지정하, call이나, apply는 영구적으로 this를가리킬수 없는데, bind는 객체를 영구적으로 가리키가 하고 싶을때 사용하면 된다.

* DOM: html문서의 태그들을 javaScript가 이용할 수 있는 객체로 만드는것, 
  * 넓은의미로는 웹브라우저가 html 페이지를 인식하는 방법
  * 좁은의미로는 document 객체와 관련된 객체의 집합을 의미

# 자바스크립트 클린코딩
* 타인이 정의한 답을 의심해라 -> 잘하는 사람이 하는말을 무조건 따르지마라
* var 는 지양해야한다 var 은 함수수코프이고 let & const는 블록단위 스코프
* 블록단위가 안전하게 코드작성가능하기때문
* const는 재할당만 금지, 안의 데이터는 변경가능
```
const a = {asd: 'a'}
a.asd = 'b'
```
* 전역공간은 최상위
* 전역 공간은 최소한으로 사용해야한다
* 전역공간은 window와 global로 나뉜다
* window는 브라우저 공간에서 최상단
* 노드js 환경에서는 global이 최상단
* global은 노드js 환경이라서 브라우저에서는 없음
* 자바스크립트는 런타임 환경도 변경이가능해서 개발자에게 위험을 초래할 수 있다
* 스코프를 나누는방법
  * IIFE
  * Module
  * Closure
* 전역변수는 만들지 말자. 지역변수만 만들자
* window, global 영역을 조작하지말자
* const와 let만 사용해도 많은부분 해소가능
* 임시변수: 어느 특정 공간에 전역변수처럼 활용하는 변수
* 임시변수도 함수가 커지면 전역이 되기 때문에 사용하는게 좋지 않음 -> 함수를 잘게 쪼개는게 좋음
* 임시변수를 만들지 않는 방법은 리턴문에 바로 객체를 보내버리면 임시변수를 만들지 않음
```
function a () {
  const b = {} // 임시변수
  result.title = document.querySelector('.title')
  return b
}

function a () {
  const b = {
    title = document.querySelector('.title')
  } // 임시변수
  return b
}

function a () {
  const b = {
    title = document.querySelector('.title')
  } // 임시변수
  return {
    title = document.querySelector('.title')
  }
}
```
* 쿼리로 DOM 을 가져오는 행위는 근본적인 부작용이 일어날 수 있음
* 함수를 추가하지않고 수정하는경우 사이드이펙트가 큼 -> 함수를 추상화하는 방법을 항상 생각하자
* 명령형으로 가득한 코드는 좋지않다 ex) 반복문 안에 더하고 빼고 하고 임시변수를 리턴하는경우는 좋지않다
* 명령형 코드를 사용하면 디버깅이 힘들고 추가적인 코드를 작성하는 유혹이 심하다 -> 해결책: 함수 나누기 or 바로반환 or 고차함수 (map, filter, reduce 등등)
* 호이스팅: 런타임 시(동작할 시)선언과 할당이 분리된것, 런타임시 선언이 최상단으로 끌어올려지는것
* var가 선언되지 않았을때 undefined로 선언부를 최상단에 끌어 올려줄 수 있는것
* let과 const를 사용하면 이런 현상을 잘 겪지 않음, 
* 함수도 호이스팅이 된다
* 변수 선언, 할당, 초기화 완료, 정확한 분리를 한번에 하는게 좋다
* 보통 함수를 사용할때는 const를 사용하는게 좋다 그냥 함수를 쓰면 호이스팅 되기 때문에 예ㅅ상하지 못한 사이드이팩트가 생길 수 있다
```
const sum = function () {
  return 1 + 2;
}
```
* let과 const도 호이스팅이 되지만 선언전에 접근하면 referenceEorror이 발생
* TDZ(temproal Dead Zone): 변수가 선언된 위치까지 도달하기 전까지 변수에 접근 불가
```
console.log(x) // referenceError
let x = 10
```
* new String() 로 값을 넣으면 참조형
* 참조형은 감벼랗기가 어렵다
* typeof null 은 object로 나오는데 이는 언어적 오류 -> 자바스크립트가 수정할수 없다고 해서 그냥 놔두는중
* 자바스크립트 언어는 동적으로 변하는 언어 => 타입도 동적
* 타입을 검사할때 굉장희 주의해야함
* 참조형의 최상위는 Object -> Object 프로토타입 체인을 타기때문
```
arr = []
arr instanceof Object // true
``` 
* Object.prototype.toString.call() 함수를 통해서 참조형 타입 검사가 가능하다 -> 무적은 아님 
* 언어체크를 할때는 구글링해서 보는게 좋음 
* undefined는 선언했지만 값은 정의되지 않고 할당하지 않은것 type undefined
* null: 값이 없는것을 명시적으로 표현 , type object
* == = eqeq ==를 사용하면 느슨해지는데 많이 사용하지말자
* 형변환을 해서 === 을 이용해 정확하게 검사를 하는게 좋다
* parseInt를 사용할때는 parseInt('9.9999', 10) 으로 10진수를 사용한다 라고 정의해주는게 좋음
* 타입을 변환할때는 명시적으로 형변환하는것이 좋음asc
* isNaN: isNaN은 쓰지말자 쓸거면 앞에 타입을 붙히면 됨 ex)Number.isNaN(123)
* 숫자 네이밍을 할때는 최소값, 최대값의 포함 여부를 표현해야한다
* begin - end 네이밍은 연속성있는 숫자 사용할때 사용
* first - last 네이밍은 연속성이 없는 것을 사용할때 사용
* 함수를 만들때는 호출하는 함수의 네이밍과 인자의 순서의 연광성을 고려한다
 1. 매개변수를 2개가 넘지 않도록 만든다?
 2. 규칙적이지 않은 매개변수가 들어올때는 arguments, rest parameter 고려
 3. 이미만든 함수가 있으면 랩핑하는 함수를 만든다
 4. 매개변수를 객체에 담아서 넘긴다
 
* 식은 값으로  귀결 될 수 있다
* () 소괄호 안에는 값만 들어가야 하는데 식을 넣고 싶으면 if 문 대신 삼항 연산자를 넣으면 된다 -> 리액트에서 jsx가 js 코드로 변환될때 ()값안에 데이터가 들어가는데 if문 같은 게 있으면 실행이 되지 않는다
* 즉시실행함수 = IIFE
* 중괄호 내부에는 값과 식만 넣어야함
* 삼항연산자가 길어지면 switch문을 쓰자
* else if 문은 else를 타고 if를 탄다고 생각하자
* else문은 습관이 되면 안된다
* early return: 예를들어 로그인 로직이있는데 로그인 안할때만 타는 로직이면 isLogin해서 return 하는게 좋다 -> 알아보기도 쉽고 코드 도는시간도 잡을 수 있음 -> 최상위에 거르는 로직 있는게 중요
* 부정조건문은 지양하는게 좋음 ex)!asd 
  1. 생각을 여러번 해야하기 때문
  2. 프로그래밍 언어 자체로 if문이 처음에 들어오고 true부터 실행시키기 때문

* 부정조건문은 early return, form validationm 보안 혹은 검사하는 로직에서는 부정조건을 사용함
* default case: 함수에 값이 들어가지 않을 때 default 기본값을 넣는게 중요
* switch 값에도 default 값을 넣는게 중요, 사용자가 잘못 넣을수 있기 때문
* 명시적인 연산자 사용을 지양하자 ex) 괄호를 달아서 사용, ++number 지양 -> 디버깅 하기가 쉽다
* false || 10 -> falsy 연산자  -> false 면 10 반환
* null or undefined ?? 10 -> nullish 연산자  null 이나 undefined면 10 반환
* 자바스크립트의 배열은 객체다
*  

