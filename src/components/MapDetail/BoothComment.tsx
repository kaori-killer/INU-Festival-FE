import styled from 'styled-components';

const CommentTop = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 1rem;

    svg{
        margin-right: 1rem;
    }
`;

const CommentBox = styled.div`
    padding: 3rem;

    p{
        padding-left: 34px;
        font-weight: 400;
    }

    h3{
        color: #969FA9;
        font-size: 1.4rem;
    }

    div{
        color: #BBC7D3;
        font-size: 1.4rem;
    }
`;

type BoothCommentProps = {
    boothComments: Comment[];
}

export default function BoothComment({ boothComments }: BoothCommentProps) {
  return (
    <>
      {boothComments.map((boothComment) => {
        const { id, content } = boothComment;

        return (
          <CommentBox key={id}>
            <CommentTop>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="url(#paint0_linear_546_1836)" />
                <path d="M6.73062 11.8398L9.21205 10.0464L6.73062 8.25293" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.2687 11.8398L14.7864 10.0464L17.2687 8.25293" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.13657 16.0244L9.06823 17.8965L11.999 16.0244L14.9306 17.8965L17.8623 16.0244" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="paint0_linear_546_1836" x1="3.42402" y1="3.74696" x2="20.7754" y2="20.4449" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FEC99F" />
                    <stop offset="1" stopColor="#F25963" />
                  </linearGradient>
                </defs>
              </svg>
              <h3>헌도오빠</h3>
              <div>.</div>
              <div>10000분전</div>
            </CommentTop>
            <p>{content}</p>
          </CommentBox>
        );
      })}
    </>
  );
}
