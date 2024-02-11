import { useEffect, SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';

type ToastProps = {
    setToast: Dispatch<SetStateAction<boolean>>
    text: string;
}

const ToastBox = styled.div`
    width: 100%;
    max-width: 600px;
    position: fixed;
    bottom: 150px;
    display: flex;
    justify-content: center;
    p{
        padding: 0.3rem 0.6rem;
        color: #a3afbc;
    }
`;

export default function Toast({ setToast, text }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <ToastBox>
      <p>{text}</p>
    </ToastBox>
  );
}
