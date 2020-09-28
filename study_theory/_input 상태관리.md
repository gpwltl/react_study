# input 상태관리

## 1. input 다루기

:hatching_chick: 기초 - 값 입력하면 바로 출력

- `useState`를 이용하여 값을 다룬다. 
  이때 주의할 점! useState import 해야 함!! :star:
- setInputText 함수를 생성하여 변화하는 값을 setText에 저장함
  e.target.value라고 해야 들어오는 값으로 저장
- \<input>에서 받을 값을 value에 저장하고 변화하는 것을 setInputText 함수에 넣어서 변화하는 값을 계속적으로 저장

```js
const WordChain = () => {

    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <h1>word-chain</h1>
            <input value={text} onChange={handleChange}></input>
            <button >입력 </button>
            <div>{text}</div>

        </div >
    );
};
```

:evergreen_tree: 실행 결과

![image](https://user-images.githubusercontent.com/44856614/94394207-bf884380-0197-11eb-80b5-4c0414354c66.png)





## 2. 부모 컴포넌트에게 정보 전달

