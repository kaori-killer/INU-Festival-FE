import { useState } from 'react';

import styled from 'styled-components';

import Toast from './Toast';

const HelpWrapper = styled.ul`
width: 100%;
padding-top:20px;
list-style:none;
`;
const HelpTitle = styled.div`
color: #000;
font-family: "SF Pro";
font-size: 20px;
font-style: normal;
font-weight: 510;
line-height: normal;
letter-spacing: -0.8px;
margin-bottom: 24px;
`;

const HelpElement = styled.li`
width: 100%;
height: 19px;
flex-shrink: 0;
margin-bottom:32px;
display:flex;
cursor: pointer;
`;

const HelpIcon = styled.img`
width: 18px;
height: 18px;
flex-shrink: 0;
margin-right:18px;
`;

const Helplink = styled.button`
color: #000;
font-family: "SF Pro";
font-size: 16px;
font-style: normal;
font-weight: 400;
letter-spacing: -0.64px;
line-height: 24px;
border:none;
background-color:transparent;
cursor:pointer;
`;

export default function HelpSection() {
  const [toast, setToast] = useState(false);
  const [toastText, setToastText] = useState('');

  const handleCopyUrl = async (url: string) => {
    await navigator.clipboard.writeText(url);
    setToastText('클립보드에 복사되었습니다.');
    setToast(true);
  };

  const handleCopyHelp = () => {
    window.open('https://open.kakao.com/o/sNl4zf7f');
  };

  const handleClickFriend = () => {
    setToastText('준비중입니다.');
    setToast(true);
  };

  return (
    <HelpWrapper>
      <HelpTitle>지원</HelpTitle>
      <HelpElement onClick={() => handleClickFriend()}>
        <HelpIcon src="Human.svg" />
        <Helplink>친구 찾기</Helplink>
        {toast && <Toast setToast={setToast} text={toastText} />}
      </HelpElement>
      <HelpElement onClick={handleCopyHelp}>
        <HelpIcon src="Contact.svg" />
        <Helplink>문의하기</Helplink>
      </HelpElement>
      <HelpElement onClick={() => handleCopyUrl('http://localhost:8080/')}>
        <HelpIcon src="Link.svg" />
        <Helplink>링크 공유하기</Helplink>
        {toast && <Toast setToast={setToast} text={toastText} />}
      </HelpElement>
    </HelpWrapper>
  );
}
