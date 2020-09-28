import React, { Component } from "react";
import "./WordChain.css";

class WordChain extends Component {
  state = {
    word: "혜지",
    value: "",
    result: "",
    words: [],
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "딩동댕",
        word: this.state.value,
        value: "",
      });
      this.input.focus();
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
      this.input.focus();
    }
    this.setState({
      words: this.state.words.concat(this.state.value),
      value: "",
    });
  };

  input;

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    const { words } = this.state;
    const inputList = words.map((t) => <div>{t}</div>);
    return (
      <>
        <h1 className="title">끝말잇기</h1>
        <div className="text-first">제시어</div>
        <div className="text">{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>입력!</button>
        </form>
        <div>{inputList}</div>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default WordChain;
