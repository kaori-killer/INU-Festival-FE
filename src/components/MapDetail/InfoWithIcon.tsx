import styled, { css } from 'styled-components';
import Booth from '../../types/Booth';
import BoothDay from '../../types/BoothDay';

const MapInfoMiddle = styled.div<{$small: string }>`
        padding: 1rem;
        div{
            display: flex;
            align-items: center;
            letter-spacing: -0.04348rem;
        }

        ${(props) => (props.$small === 'false') && css`
            div{
                padding: 1rem;
            }
            svg{
            margin: 0 1.5rem;
            }
        `}

        ${(props) => (props.$small === 'true') && css`
            font-size: 12px;
            svg{
                width: 13px;
                margin-right: 1.2rem;
            }
            p{
                letter-spacing: 0.01rem;
            }
        `}
    `;

type InfoWithIconProps = {
  small: 'true' | 'false';
  booth: Booth;
  boothDay: BoothDay;
}

export default function InfoWithIcon({
  small,
  booth,
  boothDay,
}: InfoWithIconProps) {
  if (!booth || !boothDay) { return []; }

  const { location, department } = booth;
  const { time } = boothDay[0] || [];

  return (
    <MapInfoMiddle $small={small}>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M3.78027 17.684C3.78027 18.9627 4.88259 19.9999 6.24165 19.9999H9.68757C11.0466 19.9999 12.149 18.9627 12.149 17.684V16.4162C12.149 16.1636 11.9315 15.959 11.663 15.959H4.26618C3.99777 15.959 3.78027 16.1636 3.78027 16.4162V17.684Z" fill="url(#paint0_linear_546_1745)" />
          <path d="M7.99947 0C3.58173 0 0 3.37012 0 7.52687C0 9.61922 0.970758 10.9739 3.0502 13.8129C3.12658 13.9167 3.21146 14.0146 3.28042 14.1214C3.54778 14.5307 4.02626 14.7752 4.53657 14.7752H7.16876V11.7315C6.28393 11.454 5.60812 10.7203 5.47444 9.82786C5.45428 9.69309 5.44685 9.56032 5.45004 9.43055C5.46065 9.05121 5.79909 8.75273 6.20224 8.75273H6.30409C6.72741 8.75273 7.04993 9.08415 7.04569 9.48246C7.04569 9.48545 7.04569 9.48845 7.04569 9.49144C7.04569 9.9746 7.469 10.3649 7.98568 10.3519C8.47689 10.339 8.88111 9.94266 8.87368 9.47946C8.87156 9.35169 8.83761 9.23589 9.16756 8.9444C9.30867 8.81962 9.49645 8.75273 9.6906 8.75273C10.1171 8.75273 10.4683 9.08116 10.4693 9.48346V9.49244C10.4693 10.5366 9.74896 11.4221 8.74955 11.7335V14.7762H11.3499C11.8655 14.7762 12.3536 14.5307 12.6145 14.1124C12.692 13.9876 12.779 13.8678 12.8755 13.754C15.2372 10.5216 16 9.50243 16 7.52787C15.9989 3.37012 12.4172 0 7.99947 0Z" fill="url(#paint1_linear_546_1745)" />
          <defs>
            <linearGradient id="paint0_linear_546_1745" x1="11.3644" y1="19.1917" x2="9.28942" y2="14.3958" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFCC17" />
              <stop offset="1" stopColor="#FFE37F" />
            </linearGradient>
            <linearGradient id="paint1_linear_546_1745" x1="14.5" y1="11.821" x2="4.27408" y2="-0.537095" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFCC17" />
              <stop offset="1" stopColor="#FFE37F" />
            </linearGradient>
          </defs>
        </svg>
        <p>{department}</p>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
          <path d="M14.4828 2.57725C11.1487 -0.83806 5.76703 -0.861961 2.46289 2.52347C-0.76208 5.82696 -0.81708 11.1569 2.28123 14.5859H2.2804L2.29873 14.6047C2.36956 14.6824 2.44123 14.76 2.51539 14.836C2.54123 14.8625 2.56789 14.8881 2.59373 14.9145L6.70953 19.2287C7.68202 20.2488 9.28117 20.2582 10.2653 19.2501L14.242 15.1766C14.342 15.0836 14.4395 14.9888 14.5361 14.8898C14.632 14.7916 14.7253 14.6909 14.8161 14.5885L14.8195 14.5851C17.8369 11.1817 17.7203 5.89099 14.4845 2.5764L14.4828 2.57725ZM8.67368 11.7536C6.68536 11.8569 5.05204 10.1838 5.15287 8.14709C5.23954 6.40315 6.62203 4.98615 8.32451 4.89823C10.3128 4.79494 11.9461 6.46803 11.8453 8.50475C11.7586 10.2487 10.3762 11.6657 8.67368 11.7536Z" fill="url(#paint0_linear_546_1750)" />
          <defs>
            <linearGradient id="paint0_linear_546_1750" x1="15" y1="14" x2="2.5" y2="4.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1C47C2" />
              <stop offset="1" stopColor="#2C6BFC" />
            </linearGradient>
          </defs>
        </svg>
        <p>{location}</p>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path d="M9.5 0C4.25294 0 0 4.25294 0 9.5C0 14.7471 4.25294 19 9.5 19C14.7471 19 19 14.7471 19 9.5C19 4.25294 14.7463 0 9.5 0ZM13.934 12.8251C13.8021 13.0025 13.6002 13.0964 13.3952 13.0964C13.2559 13.0964 13.1158 13.0532 12.9958 12.9645L9.05883 10.0418C8.86657 9.89869 8.77342 9.67215 8.79056 9.44933V3.38924C8.79056 3.01887 9.09088 2.71854 9.46125 2.71854C9.83162 2.71854 10.1319 3.01887 10.1319 3.38924V9.16689L13.7947 11.8862C14.092 12.1068 14.1546 12.5278 13.934 12.8251Z" fill="url(#paint0_linear_546_1752)" />
          <defs>
            <linearGradient id="paint0_linear_546_1752" x1="16.5" y1="16" x2="1.5" y2="4.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#43B9B9" />
              <stop offset="1" stopColor="#3BDE9A" />
            </linearGradient>
          </defs>
        </svg>
        <p>{time}</p>
      </div>
    </MapInfoMiddle>
  );
}
