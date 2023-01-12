// var element = document.querySelector('.myElem');
// // HTML 문서에 myElem 클래스를 갖는 요소가 없다면 null을 반환한다.
// console.log(element); // null

// if (!false)     console.log(false + ' is falsy value');
// if (!undefined) console.log(undefined + ' is falsy value');
// if (!null)      console.log(null + ' is falsy value');
// if (!0)         console.log(0 + ' is falsy value');
// if (!NaN)       console.log(NaN + ' is falsy value');
// if (!'')        console.log('' + ' is falsy value');

// var elem = null;

// // console.log(elem.value);
// console.log(elem && elem.value); // 

// var person = {
//     'first-name': 'Ung-mo',
//     'last-name': 'Lee',
//     gender: 'male',
//     1: 10
//   };
  
//   console.log(person);
  
//   console.log(person.first-name);    // NaN: undefined-undefined
//   // console.log(person[first-name]);   // ReferenceError: first is not defined
//   console.log(person['first-name']); // 'Ung-mo'
  
//   var bar = function(a, b) {
//     return a * b;
//   };

//   console.log(bar(1,2));
  
//   var student = {
//     name: 'Lee',
//     score: 90
//   };
  
//   // student에는 hasOwnProperty 메소드가 없지만 아래 구문은 동작한다.
//   console.log(student.hasOwnProperty('name')); // true
  
//   console.dir(student);

//   function Person(name) {
//     this.name = name;
//   }
  
//   Person.prototype.gender = 'male'; // ①
//   console.log(Person.prototype.constructor);
//   var foo = new Person('Lee');
//   var bar = new Person('Kim');
  
//   console.log(foo.gender); // ① 'male'
//   console.log(bar.gender); // ① 'male'

var x = 'global';

function foo() {
  var x = 'local';
  console.log(x);

  function bar() {  // 내부함수
    console.log(x); // ?
  }

  bar();
}
foo();
console.log(x); // ?