import styled from 'styled-components';

const IsLoginBtn = styled.button`
display: flex;
height: 48px;
justify-content: center;
align-items: center;
align-self: stretch;
border-radius: 12px;
border:none;
background: #0147C8;
color: #FFF;
font-family: "SF Pro";
font-size: 15px;
font-style: normal;
font-weight: 510;
line-height: normal;
letter-spacing: -0.6px;
`;

export default function LoginBtn() {
  return (
    <IsLoginBtn type="submit">로그인</IsLoginBtn>
  );
}
