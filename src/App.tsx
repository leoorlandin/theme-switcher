import React from 'react';

import GlobalStyles from './styles/global'
import Header from './components/Header';
import light from './styles/themes/light'
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
