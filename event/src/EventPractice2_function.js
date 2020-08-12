import React, { useState } from "react";

const EventPractice2_function = () => {
  const [username, SetUsername] = useState("");
  const [message, SetMessage] = useState("");

  const handleChangeUsername = (e) => SetUsername(e.target.value);
  const handleChangeMessage = (e) => SetMessage(e.target.value);
  const handleClick = () => {
    alert(username + ": " + message);
    SetUsername("");
    SetMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={handleChangeUsername}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        value={message}
        onChange={handleChangeMessage}
        onKeyPress={handleKeyPress}
      ></input>
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice2_function;
