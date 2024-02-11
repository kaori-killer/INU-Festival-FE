import { styled } from 'styled-components';
import { useState } from 'react';

const LoginWrapper = styled.form`
display: flex;
padding: 88px 20px 124px 20px;
flex-direction: column;
align-items: center;
gap: 10px;
`;
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
cursor:pointer;
`;
const KakaoBtn = styled.button`
display: flex;
height: 48px;
justify-content: center;
align-items: center;
align-self: stretch;
border-radius: 12px;
border:none;
background: #F7E600;
color:#3A1D1D;
font-family: "SF Pro";
font-size: 15px;
font-style: normal;
font-weight: 510;
line-height: normal;
letter-spacing: -0.6px;
cursor:pointer;
`;
const IdInput = styled.input`
height: 48px;
align-self: stretch;
flex-shrink: 0;
border-radius: 12px;
background: #F3F3F5;
border:none;
&::placeholder {
 padding-left:10px;
 color:#B9B9B9;
}
&:focus{
  background: #EBF2FF;
  outline: none;
}
margin-top:20px;
cursor:pointer;
`;

const PwdInput = styled.input`
align-self: stretch;
height: 48px;
flex-shrink: 0;
border-radius: 12px;
background: #F3F3F5;
border:none;
&::placeholder {
  padding-left:10px;
  color:#B9B9B9;
 }
 &:focus{
  background: #EBF2FF;
  outline: none;
  cursor:pointer;
}
`;
const BtnWrapper = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:100%;
gap:10px;
margin-top:50px;
`;
const Explain = styled.div`
color: #CFCFCF;
text-align: center;
font-family: "SF Pro";
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 19px; /* 146.154% */
letter-spacing: -0.52px;
margin-top:60px;
`;
export default function LoginContainer() {
  const RestAPIKey = '641457a0e25cbce8346a2c6c48d7179a';
  const RedirectURL = 'http://localhost:4000/auth/kakao/callback';
  const KakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${RestAPIKey}&redirect_uri=${RedirectURL}&response_type=code`;
  const handleLogin = () => {
    window.location.href = KakaoURL;
  };
  const [Id, setId] = useState('');
  const [Password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { studentID: Id, Password };
    // console.log(user);
  };
  return (
    <LoginWrapper onSubmit={handleSubmit}>
      <img src="INUlogo.png" alt="INU logo" />
      <IdInput
        value={Id}
        onChange={(e) => {
          setId(e.target.value);
        }}
        placeholder="학번"
      />
      <PwdInput
        value={Password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="비밀번호"
        type="password"
      />
      <BtnWrapper>
        <IsLoginBtn type="submit">로그인</IsLoginBtn>
        <KakaoBtn onClick={handleLogin}>카카오톡으로 로그인</KakaoBtn>
      </BtnWrapper>
      <Explain>
        로그인 정보는 포탈과 동일합니다.
        <br />
        (학생은 학번, 교원은 교번, 직원은 사번입니다.)
        <br />
        아이디 찾기 / 비밀번호 찾기는
        <br />
        PC에서 포탈을 이용하시기 바랍니다.
        <br />
      </Explain>
    </LoginWrapper>
  );
}
