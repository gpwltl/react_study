# input 상태관리

## 1. 하나의 input 다루기

:hatching_chick: 기초 - 값 입력하면 바로 출력

- `useState`를 이용하여 값을 다룬다.
  이때 주의할 점! useState import 해야 함!! :star:
  `import React, { useState } from "react";`
- setInputText 함수를 생성하여 변화하는 값을 setText에 저장함
  e.target.value라고 해야 들어오는 값으로 저장
- \<input>에서 받을 값을 value에 저장하고 변화하는 것을 setInputText 함수에 넣어서 변화하는 값을 계속적으로 저장

```js
const WordChain = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>word-chain</h1>
      <input value={text} onChange={handleChange}></input>
      <button>입력 </button>
      <div>{text}</div>
    </div>
  );
};
```

:evergreen_tree: 실행 결과

![image](https://user-images.githubusercontent.com/44856614/94394207-bf884380-0197-11eb-80b5-4c0414354c66.png)

## 2. 여러개 input 다루기

:hatching_chick: 설명

- 여러개의 state를 만들어서 구분하기보다는 input의 name을 설정해서 관리
- user 객체 안에 username과 age를 가지고 있는 형태
- `const { username, age } = user;` 를 통해 렌더링 후 값을 사용할 때 따로 사용 가능

```js
const InputSample = () => {
  const [user, setUser] = useState({
    username: "",
    age: ""
  });
  const { username, age } = user; //user 객체 비구조화 할당

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    //...user로 불변성 유지와  [name]을 사용해서 현재 입력하고 있는 input의 name의 상태 변경.
  };

  const onReset = () => {
    setUser({ username: "", age: "" });
  };
```

<br/>
## 3. useRef 이용해 focus주기
> 리액트를 사용할때 간혹 DOM을 직접 선택해서 엘리먼트의 크기를 가져와야 한다던지, 스크롤바 위치를 가져오거나 설정해야된다던지, 또는 포커스를 설정해줘야하던지 다양한 상황이 있습니다. 이럴 땐 리액트에서 ref라는 것을 사용한다.
