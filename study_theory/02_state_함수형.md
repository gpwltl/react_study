# state_함수형

## 0. 함수형 컴포넌트

기본 틀

```react
import React from 'react'

const App = () => {
    return <div>기본 형태</div>

};
export default App;
```



## 1. state

클래스형 컴포넌트가 지니고 있는 state는 함수형 컴포넌트에서 
`useState`라는 함수를 통해 사용

- state={} 를 통해 초기값을 설정하고 
- 렌더링 바로 뒤에 ` const { number, fixedNumber } = this.state;`로 state 설정

```react
class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; //state 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
```



## 2. useState

값을 변경하고 싶다면 `useState`를 사용

- useState를 import 해주고
- 초기값을 설정함 `  const [color, setColor] = useState("black");`
  - ""안에 기본 설정 값을 넣어줌
- 값 변경 시 `setColor`를 사용함

```react
import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파랑색
      </button>
    </div>
  );
};
```

