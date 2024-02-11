import styled from 'styled-components';

const UserInfoWrapper = styled.div`
display: flex;
margin-top: 16px;
justify-content: space-between;
`;
const UserSection = styled.div`
color: #000;
font-family: SF Pro;
font-size: 1.48rem; /* Adjust the font size to your preference */
font-weight: 400;
line-height: 1.5; /* Adjust line height for better readability */
letter-spacing: -0.64px;
white-space: pre-wrap;
display: flex;
flex-direction: column;
justify-content: space-between;

`;

const UserDetail = styled.div`
  div{
    color: #0147C8;
    font-weight: 400;
  }
  p{
    font-weight: 500;
    font-size: 16px;
  }
  span{
    color: #0147C8;
    font-weight: 600;
    font-size: 17px;
  }
  
`;

type UserInfoProps ={
  isLoggedIn: boolean;
}

export default function UserInfo({ isLoggedIn }: UserInfoProps) {
  const user = `즐거운 축제의 시작
희희낙락과 함께하세요!`;
  return (
    <UserInfoWrapper>
      <UserSection>
        {
          isLoggedIn
            ? (
              <UserDetail>
                <div>예술체육대학 디자인학부</div>
                <p>202100000</p>
                <span>김횃불</span>
              </UserDetail>
            )
            : <span>{user}</span>
        }
      </UserSection>
    </UserInfoWrapper>
  );
}
