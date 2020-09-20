# state_class형

## 1. 생성자

클래스의 인스턴스가 생성되면 가장 먼저 실행되는 메소드 

- render() 전에 실행
- super(props); 은 반드시 생성자의 최상단에 작성되어야 함



## 2. state

컴포넌트의 렌더링 결과물에 영향을 주는 정보를 저장한 일종의 자바스크립트 객체

- 컴포넌트 안에서 관리
- state 값 변경될 때마다 화면을 다시 렌더링

- state 값 변경
  - `this.state` : 생성자 안에서 state 값 초기화
  - `this.setState`  : 컴포넌트가 생성되고 동적으로 값을 변경하고 싶을 때 사용



## 3. 생성자에서 state 정의

렌더링되기 전, state의 기본 값을 정의하는 것

```react
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
        name: 'Cada',
        age: 25,
        country: 'KR'
      }
  }
  
  render() {
    return <div>{this.state.name} {this.state.age} {this.state.country}</div>;
  }
}

export default App;
```



## 4. 생성자 밖에서 state 정의

클래스 인스턴스 생성될 때, 클래스의 모든 속성도 함께 생성
=> state 속성을 렌더링할 때 사용

 ```react
import React, { Component } from 'react';

class App extends Component {
  this.state = {
    name: 'Cada',
    age: 25,
    country: 'KR'
  }
  
  render() {
    return <div>{this.state.name} {this.state.age} {this.state.country}</div>;
  }
}

export default App;
 ```



> state를 정의하는 방법은 생성자 안에서, 밖에서 정의하는 두 가지 방법이 있지만 동일하다. 결과에 큰 차이는 없다. 