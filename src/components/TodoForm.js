import React, { useRef, useState } from "react";
import styled from "styled-components";

const InputForm = styled.input`
  margin-top: 40px;
  height: 50px;
  width: 300px;
`;

const InputButton = styled.button`
  margin-left: 20px;
  width: 60px;
  height: 50px;
  font-weight: bold;
  font-size: 20px;
`;

const TodoForm = ({ Add }) => {
  const textRef = useRef("");
  const [text, setText] = useState("");
  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) return;
    Add(text);
    setText("");
    textRef.current.focus();
  };
  return (
    <form onSubmit={onSubmit}>
      <InputForm
        type="text"
        value={text}
        onChange={changeInput}
        ref={textRef}
      />
      <InputButton type="submit">Add</InputButton>
    </form>
  );
};

export default TodoForm;
