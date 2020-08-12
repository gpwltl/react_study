import React, { Component } from "react";

class EventPractice extends Component {
  //초기화
  state = {
    message: "",
  };

  /*
  이 작업을 안하기 위해 handle____할 때 화살표 함수를 사용하여 메서드 정의
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  */

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
