import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';

import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/defaultTheme';

import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
