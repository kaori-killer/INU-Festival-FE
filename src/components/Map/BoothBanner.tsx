import { styled } from 'styled-components';
import InfoWithIcon from '../MapDetail/InfoWithIcon';

const Wapper = styled.div`  
    max-width: 600px;
    width: 100%;
    box-shadow: 0px 2px 15px 5px rgba(1, 60, 169, 0.15);
    position: fixed;
    bottom: 0;
    /* z-index: 101; */
    z-index: -1;
    height: fit-content;
    background-color: #FFFFFF;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    cursor: grab;

`;

const BottomSheetHeader = styled.div`
    border: 0px;
    background-color: #BBC7D3;
    border-radius: 12px;
    width: 44px;
    height: 5.747px;
    margin: 11px;
    padding-top: 4px;

`;

const ContentContainer = styled.div`
  padding: 10px 0;
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;
  margin: 0 auto;
`;

const Content = styled.div`
  h3{
    color: #BBC7D3;
    font-size: 12px;
    padding-left: 10px;
    font-weight: 500;
  }
  b{
    font-size: 17px;
    color: #0147C8;
    font-weight: 600;
    display: block;
    padding: 10px;

  }

`;

const ImgBox = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  img{
    height: 140px;
    width: 140px;
    border-radius: 15px;
  }
`;

const HeartButtonBox = styled.div`
  align-items: center;
  padding: 5px 10px;
    button{
      background-color: #EBF2FF;
      border: none;
      border-radius: 20px;
      padding: 10px 15px;
      display: flex;
    }
    span{
      font-size: 11px;
      padding-left: 5px;
    }
  
`;

const ButtonContainer = styled.div`
    display: flex;
    color: #BBC7D3;
    align-items: center;
    width: 100%;
    max-width: 400px;
    justify-content: space-between;
    margin: 0 auto;
    border-top: 0.5px solid #CEDCEA;
    div{
        padding: 2rem 4rem ;
        text-align: center;
        margin: 0 3rem;
    }
  
`;

export default function BoothBanner() {
  return (
    <Wapper>
      <BottomSheetHeader />
      <ContentContainer>
        <Content>
          <h3>비주점</h3>
          <b>취업경력개발원</b>
          <HeartButtonBox>
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 16 14" fill="none">
                <path d="M14.5572 1.64121C12.7348 0.00145993 9.82823 0.174949 8.06438 1.86506C8.02336 1.90424 7.95304 1.90424 7.90616 1.86506C6.13644 0.174949 3.22988 0.00145993 1.41328 1.64121C-0.403316 3.28096 -0.502936 6.1687 1.31366 7.90359L6.59352 12.946C7.36704 13.6847 8.61522 13.6847 9.38873 12.946L14.4518 8.11066L14.6627 7.90919C16.4793 6.1743 16.4442 3.34252 14.5631 1.6468L14.5572 1.64121Z" fill="#FF3D00" />
              </svg>
              {/* <span>{SelectedBooth?.liked}</span> */}
              <span>1,992</span>
            </button>
          </HeartButtonBox>
          <InfoWithIcon small="middle" />
        </Content>
        <ImgBox>
          <img src="BOL.jpeg" alt="img" />
        </ImgBox>
      </ContentContainer>
      <ButtonContainer>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
            <path d="M21.8359 1.84349C19.1022 -0.805334 14.7424 -0.525083 12.0966 2.2051C12.035 2.26839 11.9296 2.26839 11.8592 2.2051C9.20466 -0.525083 4.84482 -0.805334 2.11992 1.84349C-0.604974 4.49231 -0.754403 9.15714 1.97049 11.9596L9.89028 20.105C11.0506 21.2983 12.9228 21.2983 14.0831 20.105L21.6777 12.2941L21.9941 11.9687C24.719 9.16618 24.6662 4.59176 21.8447 1.85253L21.8359 1.84349Z" fill="#BBC7D3" />
          </svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M20.0487 15.0782C18.8702 15.0782 17.799 15.5375 17.0026 16.2864L9.38293 12.4089C9.39705 12.2627 9.40458 12.1146 9.40458 11.9646C9.40458 11.7911 9.39328 11.6213 9.37446 11.4534L16.9038 7.62114C17.7096 8.4257 18.8203 8.92372 20.0477 8.92372C22.5064 8.92372 24.5 6.926 24.5 4.46233C24.5 1.99866 22.5073 0 20.0487 0C17.59 0 15.5964 1.99772 15.5964 4.46139C15.5964 4.61607 15.6039 4.76793 15.6199 4.91884L8.05854 8.76715C7.25656 7.98428 6.16184 7.5023 4.95417 7.5023C2.49365 7.5023 0.5 9.50002 0.5 11.9637C0.5 14.4274 2.49365 16.4251 4.95229 16.4251C6.18443 16.4251 7.29892 15.9233 8.1056 15.1131L15.6359 18.9453C15.6105 19.1396 15.5954 19.3368 15.5954 19.5386C15.5954 22.0023 17.5891 24 20.0477 24C22.5064 24 24.5 22.0023 24.5 19.5386C24.5 17.0749 22.5064 15.0772 20.0477 15.0772L20.0487 15.0782Z" fill="#BBC7D3" />
          </svg>
        </div>
      </ButtonContainer>
    </Wapper>
  );
}
