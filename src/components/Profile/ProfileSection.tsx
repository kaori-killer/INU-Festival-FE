import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import UserInfo from './UserInfo';

const ProfileWrapper = styled.div`
display:flex;
width: 100%;
height: 17.9em;
border-radius:0px 0px 20px 20px;
background-color: #EBF2FF;
padding-top:5em;
padding-right:1.25em;
padding-left:1.25em;
box-shadow: 0px 3px 13px 0px rgba(1, 71, 200, 0.10);
justify-content : space-around;
position: relative;
`;

const ProfileContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-start;
gap: 24px;
`;
const ProfileTitle = styled.div`
color: #000;
font-family: SF Pro;
font-size: 1.5em;
font-style: normal;
font-weight: 600;
`;
const UserIcon = styled.img`
width: 48%;
height: auto;
margin-bottom:32px;
flex-shrink: 1;
`;
const LoginBtn = styled.button`
display: flex;
height: 48px;
justify-content: center;
align-items: center;
gap: 10px;
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

const LogoutBtn = styled.button`
  height: 48px;
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
  position: fixed;
  bottom: 100px;
  width: calc(100% - 2.5em);
  max-width: 560px;
`;

export default function ProfileSection() {
  const [isLoggedIn, setIsLoggdeIn] = useState(true);
  const navigate = useNavigate();
  const handleLogBtn = () => {
    if (isLoggedIn) {
      setIsLoggdeIn(false);
    } else {
      navigate('/login');
    }
  };
  return (
    <ProfileWrapper>
      <ProfileContainer>
        <ProfileTitle>프로필</ProfileTitle>
        <UserInfo isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogoutBtn onClick={handleLogBtn}>로그아웃</LogoutBtn>
        ) : (
          <LoginBtn onClick={handleLogBtn}>로그인</LoginBtn>
        )}
      </ProfileContainer>
      <UserIcon src="default.svg" alt="major" />
    </ProfileWrapper>
  );
}
