# async & await

자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법. 

기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드로 작성하도록 도와줌

async 함수 내부에서 await을 사용하여 마치 동기적으로 코드를 작성하는 것



:zap: **기본 문법**

```js
async function 함수명() {
  await 비동기_처리_메서드_명();
}
```

- 먼저 함수 앞에 async를 붙이고 
- 함수 내부 로직 중 HTTP 통신하는 비동기 처리 코드 앞에 await을 붙인다. 



**:zap: 특징**

- await 은 async 함수 안에서만 사용 가능 (일반 함수에서는 사용할 수 없음)
- .then 호출 대신 await을 사용하는 것

- async 함수의 반환값은 항상 promise 객체인 것 :star:



:zap: **예제**

```js
//방법1. jQuery ajax 코드 
function fetchItems() {
  return new Promise(function(resolve, reject) {
    $.ajax('domain.com/items', function(response) {
      resolve(response);
    });
  });
}

//방법2. HTTP 통신 동작을 모방한 코드
function fetchItems() {
  return new Promise(function(resolve, reject) {
	setTimeout(function() {
      var items = [1,2,3];
      resolve(items)
    }, 3000);
  });
}


async function logItems() {
  var resultItems = await fetchItems();
  console.log(resultItems); // [1,2,3]
}
```

- fetchItems() 함수는 프로미스 객체를 반환하는 함수 
  -> 실행하면 프로미스가 이행되며 결과값이 items 배열로 저장
- logItems()는 fetchItems()의 결과값 items 배열을 resultItems에 담고 콘솔로 출력해줌 
- 만약 await를 사용하지 않는다면, 데이터를 받아온 시점에 콘솔을 출력할 수 있게 콜백함수나 .then() 을 사용해야만 함



**:zap: 예외 처리 **  -try catch문 이용할 것

프로미스에서 에러 처리하기 위해 .catch() 사용한 것처럼 async에서는 catch{}를 사용하면 된다. 

```js
async function logTodoTitle() {
  try {
    var user = await fetchUser();
    if (user.id === 1) {
      var todo = await fetchTodo();
      console.log(todo.title); // delectus aut autem
    }
  } catch (error) {
    console.log(error);
  }
}
```

- 간단한 타입의 오류, 일반적인 오류까지 catch로 잡아내고 error 객체에 담기 때문에 에러의 유형에 맞게 에러 코드 처리하면 된다. 