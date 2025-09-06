import React, { useRef } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  input {
    width: 115%;
    align-self: stretch;
    height: 56px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #F3F3F5;
    border: none;
    padding-left: 15px;
    font-size: 16px;
    transform: scale(0.87);
    margin-left: -7.5%;
    
    &::placeholder {
      color: #B9B9B9;
    }
    &:focus{
      background: #EBF2FF;
      outline: none;
    }
  }
`;

type TextBoxProps = {
  label: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'password'; // ← 계속해서 지원할 타입을 쭉 써주자.
  value: string;
  onChange: (value: string) => void;
}

export default function TextBox({
  label, placeholder = undefined, type = 'text', value, onChange,
}: TextBoxProps) {
  const id = useRef(`textbox-${Math.random().toString().slice(2)}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Container>
      <input
        id={id.current}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}
