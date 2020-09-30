# React-router

버전5로 진행하겠습니다.

:baby_chick: **진행과정**

1. npm 설치
   `npm i react-router-dom --save`
2. import

```js
import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
```

- **BrowserRouter** - history API를 사용해 URL과 UI를 동기화하는 라우터
- **Route** - 컴포넌트의 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트, 함수를 렌더링
- **Link** - 'a'태그와 비슷. to속성에 설정된 링크로 이동. 기록이 history스택에 저장
- **Switch** - 자식 컴포넌트 Route또는 Redirect중 매치되는 첫 번째 요소를 렌더링.

3. 라우팅 적용

```js
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Rooms from './Rooms'

class App extends Component {
    function Home({ match }) {
        return <h2>여기는 홈페이지입니다.</h2>
	}
	function Photo({ match }) {
  		return <h2>여기서 사진을 감상하세요.</h2>
	}

    render() {
    return (
      <BrowserRouter>
          <Link to="/">홈</Link><br />
          <Link to="/photo">사진</Link><br />
          <Link to="rooms">방 소개</Link><br />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/photo" component={Photo} />
            <Route path="/rooms" component={Rooms} />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
```

- `BrowserRouter`가 라우터를 적용하는 곳을 모두 감싸고 있다.
- `Link`는 이동하는 url을 지정
- `Switch`는 매치되는 url을 렌더링(Router를 감싸고 있다.)
  Route가 중복되는 것은 첫번째 요소만 렌더링
- `Route`의 path는 매칭을 기다리는 url (exact: 기본적으로 홈 라우터 개념)
  매칭되면 component를 렌더링

4. 중첩라우팅 적용

> Rooms는 앞서 함수로 지정하지 않았기 때문에 해당 .js파일이 존재한다는 것을 알 수 있음(import한 것으로도 파악 가능)

```js
import React from "react";
import { Route, Link } from "react-router-dom";

export default function Rooms({ match }) {
  return (
    <div>
      <h2>여기는 방을 소개하는 페이지입니다.</h2>
      <Link to={`${match.url}/blueRoom`}> 파란 방입니다. </Link>
      <br />
      <Link to={`${match.url}/greenRoom`}> 초록 방입니다. </Link>
      <br />

      <Route path={`${match.url}/:roomId`} component={Room} />
      <Route
        exact
        path={match.url}
        render={() => <h3>방을 선택해주세요.</h3>}
      />
    </div>
  );
}
function Room({ match }) {
  // 함수형에서 match 참조하기
  return <h2>{`${match.params.roomId} 방을 선택하셨습니다.`}</h2>;
}
```

- `Link`로 이동 url을 지정

  이때, match.url는 기존의 url인 rooms

  - match.url : value를 포함한 url (위 예제에서는 /blueRoom, /greenRoom)

  - match.params : 동적인 url (위 예제에서는 roomId)
  - match.isExact : 전체 url과 일치하는지 반환하는 boolean

- `Route`는 매칭을 기다리는 url

<br/>

:evergreen_tree: **실행 결과**

![image-20200924235035626](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200924235035626.png)

![image-20200924235052693](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200924235052693.png)

<br/>

:smile: 정리해보자!

1. 하나의 페이지에서만 라우터를 사용하고 싶다 ?

위에서 제공한 순서대로!

2. 한 페이지에서 진행되는 것이 아니라, 예를 들어 NavBar에서 Home, Login 페이지를 부르고 싶다?

- 그렇다면 (**App.js**)에서 \<NavBar /> 선언 밑에 \<Switch>\<Route/>\</Switch> 구문을 작성해주고, (**NavBar.js**)에서 \<Link/>를 선언해줄 것

- index.js에서 App을 감쌀 때 \<BroswerRouter>로 감싸야 함!!

<br/>

:jack_o_lantern: **추가로 알아두면 좋은 것**

1. 화면 전환 시, 맨위로 스크롤 가게 하는 법

- ScrollToTop.js 파일을 하나 생성하고 내용을 추가한다.

```js
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
}

export default withRouter(ScrollToTop);
```

- 경로를 지정한 \<Switch>\<Route/>\ **위에** \<ScrollToTop/>을 선언해준다.
