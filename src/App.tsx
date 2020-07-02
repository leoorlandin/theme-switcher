import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global'
import Header from './components/Header';

import light from './styles/themes/light';
import dark from './styles/themes/dark';


function App() {

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </>
  );
}

export default App;
