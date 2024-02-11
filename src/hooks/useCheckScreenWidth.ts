import { useEffect, useState } from 'react';

export default function useCheckScreenWidth(
  defaultPerview: number,
  setPerView: (value: number) => void,
) {
  const [, setWindowSize] = useState({
    width: window.innerWidth,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
    });
    if (window.innerWidth <= 550) {
      setPerView(defaultPerview - 1.3);
    } else {
      setPerView(defaultPerview - 0.3);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
}
