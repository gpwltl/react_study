import React, { Component } from "react";
import "./WordChain.css";

class WordChain extends Component {
  state = {
    word: "라디오",
    value: "",
    correct: "",
    wrong: "",
    words: [],
    count: 0,
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        word: this.state.value,
        value: "",
        correct: "정답! +10",
        wrong: "",
        count: this.state.count + 10,
        words: this.state.words.concat(this.state.value),
      });
    } else {
      this.setState({
        correct: "",
        wrong: "땡!",
        value: "",
      });
      //this.input.focus();
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  // onRefInput = (c) => {
  //   this.input = c;
  // };

  render() {
    const { words } = this.state;
    const inputList = words.map((t) => <div className="list">{t}</div>);
    return (
      <>
        <h1 className="title">끝말잇기</h1>
        <div className="rule">
          <h3>Rule</h3>
          <p>1. 제시어를 확인하세용!</p>
          <p>2. 해당 제시어로 끝나는 글자로 시작하는 글자를 입력하세요</p>
          <p>3. 모든 단어의 자릿수는 상관없습니다~ 마음껏 뽐내보세용 </p>
          <p>4. 정답을 맞추면 플러스 10점! 점수를 채워볼까용?!</p>
        </div>
        <h4 className="text-first">제시어</h4>
        <div className="text">{this.state.word}</div>
        <form onSubmit={this.onSubmitForm} className="input">
          <input
            //ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>입력</button>
        </form>
        <div className="list-position">{inputList}</div>

        <div className="count">
          <h3>점수</h3>
          {this.state.count}
        </div>
        <div className="result-correct">{this.state.correct}</div>
        <div className="result-wrong">{this.state.wrong}</div>
      </>
    );
  }
}

export default WordChain;
