# promise 객체

## 0. 비동기 처리

특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지않고 다음 코드를 먼저 실행함

1. **제이쿼리의 ajax**

```js
function getData() {
	var tableData;
	$.get('https://domain.com/products/1', function(response) {
		tableData = response;
	});
	return tableData;
}

console.log(getData()); // undefined
```

- `$.get`이 ajax 통신하는 부분 -> https://domain.com에다가 GET요청을 날려 1번 정보를 요청하는 것 

- 서버에서 받아온 데이터는 response 인자에 담고, 그 인자를 tableData 변수에 저장

- getData()를 호출하면 데이터가 찍혀야 겠지? 하지만 undefined 
- `그 이유는, 데이터를 요청하고 받아오는 동안 기다리지 않고 return 값을 바로 줘버리기 때문에 getData()는 초기값이 없기에 undefined 출력`



2. **setTimeout() - web api**

```js
console.log('Hello');			//(1)

setTimeout(function() {
	console.log('Bye');
}, 3000);						//(2)
	
console.log('Hello Again'); 	//(3)
```

- 결과값이 순서대로 나올까? 
- 비동기 처리이기 때문에, `3초를 기다리지 않고 일단 다음 코드를 먼저 실행 `
  - 'Hello' 출력 (1)
  - 'Hello Again' 출력 (3)
  - 3초 있다가 'Bye' 출력 (2)



**콜백 함수로 비동기 처리 방식 해결**

```js
function getData(callback) {
	$.get('https://domain.com/products/1', function(response) {
		callback(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
	});
}

getData(function(tableData) {
	console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
```

- 특정 로직이 끝났을 때 원하는 동작을 실행시킬 수 있다. 



:yum: **비유로 이해하는 콜백 함수 동작 방식**

콜백 함수는 식당 자리 예약과 동일한 방식. 

맛집을 가면 사람이 많아서 대기자 명단에 이름을 쓰고 자리가 날 때까지 주변 식당을 돌아다닌다. 식당에 자리가 생기면 전화로 자리가 났다고 연락이 온다. 하지만 전화받기 전까지 손님은 식당에서 기다리지 않고 근처 가게에서 잠깐 쇼핑을 하거나 다른 식당 자리를 알아볼 수 있다. 

즉, 전화를 받는 시점 = `콜백 함수가 호출되는 시점`

자리가 준비된 시점 = `데이터가 준비된 시점`

자리에 앉는다. = `특정 값을 출력한다(원하는 동작을 수행한다.)`





## 1. 정의

자바스크립트 비동기 처리에 사용되는 객체

- 서버에서 데이터를 요청하고 받아오기 위해 api를 사용하게 되는데 데이터를 응답받을 때까지 기다리게 되면 화면에서는 오류가 발생하거나 빈화면이 뜬다. 
  이를 해결하기 위해 프로미스 사용하는 것 .
- 콜백 헬을 해결하기 위해 프로미스 사용



## 2. states

**프로미스의 3가지 상태** 

new Promise()로 프로미스를 생성하고 종료할 때까지 3가지의 상태를 가짐

- pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
- Fulfilled(이행/ 완료) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태



1. **pending** 

- 콜백함수를 선언할 수 있고, 콜백 함수의 인자는 resolve(성공), reject(실패)

```js
new Promise(function(resolve, reject) {
  // ...
});
```

2. **fulfilled**

- 콜백함수의 인자로 resolve를 실행하면 됨 

```js
new Promise(function(resolve, reject) {
  resolve();
});
```

3. **rejected**

- 콜백함수 인자로 reject를 실행하면 됨

```js
new Promise(function(resolve, reject) {
  reject();
});
```



## 3. 예제

- state : pending -> fullments (성공 resolve, 실패 reject)

- Provider/ Consumer  `많은 예외 처리 상황을 위해 프로미스의 끝에 가급적이면 catch()를 붙일 것`
  - then(success callback) -성공
  - catch(fail callback) -실패 (에러처리)
  - finally(callback) -무조건 실패



1. Ajax

```js
//Provider
function getData() {
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      if (response) {
        resolve(response);
      }
      reject(new Error("Request is failed"));
    });
  });
}

//Consumer
getData().then(function(data) {
  console.log(data); // response 값 출력
}).catch(function(err) {
  console.error(err); // Error 출력
});
```



2. setTimeout()

```js
//Provider
let myFirstPromise = new Promise((resolve, reject) => {  
  setTimeout(function(){
    resolve(1); //초기값 1
  }, 250);
});

//Consumer
myFirstPromise.then((result) => {
  console.log(result+10); 		//11
})
.then((result)=> {
    console.log(result+20); 	//31
});
```

