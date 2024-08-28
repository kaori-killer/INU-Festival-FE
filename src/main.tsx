import 'reflect-metadata';

import ReactDOM from 'react-dom/client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import initMockAPI from './mocks/index';
import App from './App';

async function deferRender() {
  if (process.env.NODE_ENV === 'development') {
    await initMockAPI();
  }
}

deferRender().then(() => {
  const container = document.getElementById('root');

  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(<App />);
});
