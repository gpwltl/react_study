# event

## 0. bind()

바인드하는 함수에서 사용하는 this의 대상을 지정해주는 역할

```react
const objA = {
  name: 'a',
  aFunc: function() {
    console.log(this.name)
  },
}

const objB = {
  name: 'b',
}

objA.aFunc() // (1)
// a
objA.aFunc.bind(objB) // (2)
const foo = objA.aFunc.bind(objB) // (3)
foo() //(4)
// b
```



1. objA의 aFunc을 실행하면  `a` 출력

2. aFunc에 objB의 값을 사용할 수 있을까 ?

   `bind`를 이용하여 aFunc과 동일한 기능을 하는 바인딩된 함수를 만들어 사용할 것 ! 

3. 변수 foo에 2번을 할당

4. foo 함수 호출  - `b` 출력



### React의 bind

![image-20200913225445231](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200913225445231.png)

**ES6 부터 화살표 함수 사용 가능**

- this는 다른 언어와 달리 실행 문맥에 따라 변화하지만 `화살표 함수가 이를 해결함`

- 화살표 함수의 this는 외부함수의 this를 상속받고 있어 `this는 항상 일정함 `
- bind 함수로 바인딩이 필요하지 않음



## 1. event 사용

```react
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

- 리액트는 false를 반환해도 기본 동작을 방지할 수 없음
- `preventDefault`를 명시적으로 호출하여 새 페이지를 여는 링크의 기본 동작을 방지할 수 있음



- DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해 `addEventListener` 를 호출할 필요 없음 
  (단, 처음 렌더링될 때 리스너 제공할 것)