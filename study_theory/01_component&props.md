# React

리액트는 페이스북에서 제공해주는 프론트엔드 라이브러리

- component 기반
- one wat data flow
- props and state



## 0. Virtual DOM

가상의 Document Object Model

> **DOM형태는** 
> HTML 파일을 열게되면, html 코드들이 DOM을 생성.
>
> 만약, html 코드의 한 부분이 변경되면 전체 DOM을 새롭게 만들어야 하는 비효율적인 구조를 띄고 있다. 

- Virtual DOM을 만들어서 진짜 DOM과 비교하여 변경사항이 있을 때 전체를 새롭게 만들지 않고 변경된 부분만 진짜 DOM과 비교하여 반영하는 방식
- 앱의 효율성과 속도를 높일 수 있음



## 1. Component

- UI가 하나의 큰 덩어리라면, component는 덩어리를 이루는 `아주 작은 요소들`
- 작은 컴포넌트들로 쪼개져 있기 때문에 `전체 코드를 파악하기` 상대적으로 쉽다. 
- 작은 컴포넌트들은 다른 화면에서도 사용할 수 있어 `재사용성`이 가능하다.



## 2. Props

부모 컴포넌트에서 자식 컴포넌트로 전달해주는 데이터

- `읽기 전용` 데이터
- 자식 컴포넌트에서 전달받은 props는 변경 불가능
- `최상위 부모 컴포넌트만 props를 변경 가능`



![image-20200913155936018](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200913155936018.png)



## 3. State

- 리액트는 데이터 흐름이 한방향으로만 흘러 데이터를 올려줄 수 없다.
- `부모의 데이터를 바꿔주기 위해` state 사용
- 동적인 데이터를 다룰 때 사용
- 클래스 컴포넌트에서만 사용하고 stat는 독립적이라 다른 컴포넌트의 직접적인 접근은 불가능함
- **but.** 자신보다 상위에 있는 state는 변경 가능하지만 state를 변경하는 함수는 props로 받으면 state 변경이 가능함 (this의 binding 신경쓰기 !)



![image-20200913162701148](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200913162701148.png)