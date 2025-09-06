import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Article from '../components/Article';
import LoginForm from '../components/Login/LoginForm';

import useLoginFormStore from '../hooks/useLoginFormStore';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [{ accessToken }, store] = useLoginFormStore();

  useEffect(() => {
    store.reset();
  }, []);

  useEffect(() => {
    if (accessToken) {
      store.reset();
      const nextPath = location.state?.from || '/profile'; // 이전 경로를 받아옵니다.
      navigate(nextPath);
    }
  }, [accessToken]);

  return (
    <Article>
      <LoginForm />
    </Article>
  );
}
