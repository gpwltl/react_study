# hooks

## 1. useState



## 2. useEffect

- 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정하는 것

(클래스형의 componentDidMount와 componentDidUpdate가 합친 형태)

- 두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 달라짐

```js
//1. 기본 useEffect 사용
    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
        console.log({
            name,
            nickname
        });
    });

//2. 마운트 될 때만 실행하고 싶을 때
	useEffect(() => {
        console.log('마운트 될 때만 실행됩니다.');
        console.log({
            name,
            nickname
        });
    }, []);

//3. 특정 값이 업데이트 될 때만 실행하고 싶을 때 
	useEffect(() => {
        console.log(name);
    }, [name]);

//4. 언마운트 전, 업데이트 전에 어떠한 작업을 수행하고 싶다면 cleanup 함수를 반환할 것.
  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  });

//5. 언마운트될 때만 cleanup함수를 호출하고 싶다면 두 번째 파라미터에 비어있는 배열을 넣어주면 됨
```

:evergreen_tree: 결과는 ? 

1. 콘솔에 칠때마다 값이 출력
2. []만 적으면서, 마운트 될 때만 실행되기에 값을 입력했을 때 콘솔에는 아무 변화 없음

3. 특정값을 [name]라고 지정하여 name이 변했을 때만 콘솔에 출력